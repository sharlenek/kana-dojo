/**
 * Wallpaper System — Public API
 *
 * Wallpapers are dynamically generated from source images.
 * Run `npm run images:process` to regenerate after adding/removing images
 * in data/wallpapers-source/.
 *
 * The generated manifest is the single source of truth.
 */
import {
  GENERATED_WALLPAPERS,
  type GeneratedWallpaper,
} from './wallpapers.generated';

export type { GeneratedWallpaper as Wallpaper };

/** All available wallpapers (re-exported from generated manifest) */
export const WALLPAPERS = GENERATED_WALLPAPERS;

/**
 * Get a wallpaper by ID
 */
export function getWallpaperById(id: string): GeneratedWallpaper | undefined {
  return GENERATED_WALLPAPERS.find(w => w.id === id);
}
