// @ts-nocheck
// This file was generated by [tauri-specta](https://github.com/oscartbeaumont/tauri-specta). Do not edit this file manually.

/** user-defined commands **/


export const commands = {
async greet(name: string) : Promise<string> {
    return await TAURI_INVOKE("greet", { name });
},
async getConfig() : Promise<Config> {
    return await TAURI_INVOKE("get_config");
},
async saveConfig(config: Config) : Promise<Result<null, CommandError>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("save_config", { config }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async login(username: string, password: string) : Promise<Result<UserProfileRespData, CommandError>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("login", { username, password }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async search(keyword: string, page: number, sort: SearchSort) : Promise<Result<SearchResult, CommandError>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("search", { keyword, page, sort }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getAlbum(aid: number) : Promise<Result<Album, CommandError>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_album", { aid }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getChapter(id: number) : Promise<Result<ChapterRespData, CommandError>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_chapter", { id }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getScrambleId(id: number) : Promise<Result<number, CommandError>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_scramble_id", { id }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async getUserProfile() : Promise<Result<UserProfileRespData, CommandError>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("get_user_profile") };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async downloadChapters(chapterInfos: ChapterInfo[]) : Promise<Result<null, CommandError>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("download_chapters", { chapterInfos }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
},
async showPathInFileManager(path: string) : Promise<Result<null, CommandError>> {
    try {
    return { status: "ok", data: await TAURI_INVOKE("show_path_in_file_manager", { path }) };
} catch (e) {
    if(e instanceof Error) throw e;
    else return { status: "error", error: e  as any };
}
}
}

/** user-defined events **/


export const events = __makeEvents__<{
downloadChapterEndEvent: DownloadChapterEndEvent,
downloadChapterPendingEvent: DownloadChapterPendingEvent,
downloadChapterStartEvent: DownloadChapterStartEvent,
downloadImageErrorEvent: DownloadImageErrorEvent,
downloadImageSuccessEvent: DownloadImageSuccessEvent,
downloadSpeedEvent: DownloadSpeedEvent,
updateOverallDownloadProgressEvent: UpdateOverallDownloadProgressEvent
}>({
downloadChapterEndEvent: "download-chapter-end-event",
downloadChapterPendingEvent: "download-chapter-pending-event",
downloadChapterStartEvent: "download-chapter-start-event",
downloadImageErrorEvent: "download-image-error-event",
downloadImageSuccessEvent: "download-image-success-event",
downloadSpeedEvent: "download-speed-event",
updateOverallDownloadProgressEvent: "update-overall-download-progress-event"
})

/** user-defined constants **/



/** user-defined types **/

export type Album = { id: number; name: string; addtime: string; description: string; total_views: string; likes: string; chapterInfos: ChapterInfo[]; series_id: string; comment_total: string; author: string[]; tags: string[]; works: string[]; actors: string[]; related_list: RelatedListRespData[]; liked: boolean; is_favorite: boolean; is_aids: boolean }
export type AlbumInSearchRespData = { id: string; author: string; name: string; image: string; category: CategoryRespData; category_sub: CategorySubRespData; liked: boolean; is_favorite: boolean; update_at: number }
export type CategoryRespData = { id: string; title: string }
export type CategorySubRespData = { id: string | null; title: string | null }
export type ChapterInfo = { chapterId: number; chapterTitle: string; albumId: number; albumTitle: string; isDownloaded: boolean }
export type ChapterRespData = { id: number; series: SeriesRespData[]; tags: string; name: string; images: string[]; addtime: string; series_id: string; is_favorite: boolean; liked: boolean }
export type CommandError = string
export type Config = { avs: string; downloadDir: string }
export type DownloadChapterEndEvent = DownloadChapterEndEventPayload
export type DownloadChapterEndEventPayload = { chapterId: number; errMsg: string | null }
export type DownloadChapterPendingEvent = DownloadChapterPendingEventPayload
export type DownloadChapterPendingEventPayload = { chapterId: number; title: string }
export type DownloadChapterStartEvent = DownloadChapterStartEventPayload
export type DownloadChapterStartEventPayload = { chapterId: number; title: string; total: number }
export type DownloadImageErrorEvent = DownloadImageErrorEventPayload
export type DownloadImageErrorEventPayload = { chapterId: number; url: string; errMsg: string }
export type DownloadImageSuccessEvent = DownloadImageSuccessEventPayload
export type DownloadImageSuccessEventPayload = { chapterId: number; url: string; downloadedCount: number }
export type DownloadSpeedEvent = DownloadSpeedEventPayload
export type DownloadSpeedEventPayload = { speed: string }
export type RelatedListRespData = { id: string; author: string; name: string; image: string }
export type SearchRespData = { search_query: string; total: string; content: AlbumInSearchRespData[] }
export type SearchResult = { SearchRespData: SearchRespData } | { Album: Album }
export type SearchSort = "Latest" | "View" | "Picture" | "Like"
export type SeriesRespData = { id: string; name: string; sort: string }
export type UpdateOverallDownloadProgressEvent = UpdateOverallDownloadProgressEventPayload
export type UpdateOverallDownloadProgressEventPayload = { downloadedImageCount: number; totalImageCount: number; percentage: number }
export type UserProfileRespData = { uid: string; username: string; email: string; emailverified: string; photo: string; fname: string; gender: string; message: string | null; coin: number; album_favorites: number; s: string; level_name: string; level: number; nextLevelExp: number; exp: string; expPercent: number; album_favorites_max: number; ad_free: boolean; charge: string; jar: string; invitation_qrcode: string; invitation_url: string; invited_cnt: string }

/** tauri-specta globals **/

import {
	invoke as TAURI_INVOKE,
	Channel as TAURI_CHANNEL,
} from "@tauri-apps/api/core";
import * as TAURI_API_EVENT from "@tauri-apps/api/event";
import { type WebviewWindow as __WebviewWindow__ } from "@tauri-apps/api/webviewWindow";

type __EventObj__<T> = {
	listen: (
		cb: TAURI_API_EVENT.EventCallback<T>,
	) => ReturnType<typeof TAURI_API_EVENT.listen<T>>;
	once: (
		cb: TAURI_API_EVENT.EventCallback<T>,
	) => ReturnType<typeof TAURI_API_EVENT.once<T>>;
	emit: null extends T
		? (payload?: T) => ReturnType<typeof TAURI_API_EVENT.emit>
		: (payload: T) => ReturnType<typeof TAURI_API_EVENT.emit>;
};

export type Result<T, E> =
	| { status: "ok"; data: T }
	| { status: "error"; error: E };

function __makeEvents__<T extends Record<string, any>>(
	mappings: Record<keyof T, string>,
) {
	return new Proxy(
		{} as unknown as {
			[K in keyof T]: __EventObj__<T[K]> & {
				(handle: __WebviewWindow__): __EventObj__<T[K]>;
			};
		},
		{
			get: (_, event) => {
				const name = mappings[event as keyof T];

				return new Proxy((() => {}) as any, {
					apply: (_, __, [window]: [__WebviewWindow__]) => ({
						listen: (arg: any) => window.listen(name, arg),
						once: (arg: any) => window.once(name, arg),
						emit: (arg: any) => window.emit(name, arg),
					}),
					get: (_, command: keyof __EventObj__<any>) => {
						switch (command) {
							case "listen":
								return (arg: any) => TAURI_API_EVENT.listen(name, arg);
							case "once":
								return (arg: any) => TAURI_API_EVENT.once(name, arg);
							case "emit":
								return (arg: any) => TAURI_API_EVENT.emit(name, arg);
						}
					},
				});
			},
		},
	);
}
