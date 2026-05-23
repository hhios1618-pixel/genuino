const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://audszsghfitbfogbfjpf.supabase.co";
const MEDIA_BUCKET = process.env.NEXT_PUBLIC_SUPABASE_MEDIA_BUCKET ?? "genuino-media";

export function mediaUrl(storagePath: string, fallbackPath: string) {
  if (!SUPABASE_URL) {
    return fallbackPath;
  }

  return `${SUPABASE_URL}/storage/v1/object/public/${MEDIA_BUCKET}/${storagePath}`;
}
