import { writable, get } from 'svelte/store';
import { SpotifyApi } from '@spotify/web-api-ts-sdk';
import { SPOTIFY_CONFIG } from '../config/spotify';

export const currentTrack = writable(null);
export const spotifySDK = writable(null);

export async function initializeSpotify() {
	try {
		const sdk = SpotifyApi.withUserAuthorization(
			SPOTIFY_CONFIG.clientId,
			SPOTIFY_CONFIG.redirectUri,
			SPOTIFY_CONFIG.scopes
		);
		
		spotifySDK.set(sdk);
		await updateNowPlaying();
		// Update now playing every 5 seconds
		setInterval(updateNowPlaying, 5000);
	} catch (error) {
		console.error('Failed to initialize Spotify:', error);
	}
}

export async function updateNowPlaying() {
	try {
		const sdk = get(spotifySDK);
		if (!sdk) return;

		const track = await sdk.player.getCurrentlyPlayingTrack();
		if (track && track.item) {
			currentTrack.set({
				name: track.item.name,
				artist: track.item.artists[0].name,
				albumArt: track.item.album.images[0].url
			});
		}
	} catch (error) {
		console.error('Failed to update now playing:', error);
	}
}