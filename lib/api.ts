// lib/api.ts
import { appEvents } from '@/config/customEvents'

const BASE_URL = process.env.API_URL

export async function submitAppBuild(formData: any) {
  const res = await fetch(`${BASE_URL}/api/build-app`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  if (!res.ok) throw new Error('Failed to submit build');
  return res.json();
}

export async function getBuildStatus(jobId: string) {
  const res = await fetch(`${BASE_URL}/api/build-status/${jobId}`);
  if (!res.ok) throw new Error('Failed to fetch build status');
  return res.json();
}

export function downloadApp(jobId: string) {
  appEvents({
    eventName: 'download_app',
    payload: {
      job_id: jobId
    }
  })
  window.location.href = `${BASE_URL}/api/download-app/${jobId}`;
}