// lib/api.ts
import { appEvents } from '@/config/customEvents';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL

export async function submitAppBuild(formData: any) {
  try {
    const response = await axios.post(`${BASE_URL}/api/build-app`, formData);
    return response.data;
  } catch (error: any) {
    console.log("main error", error?.message);
    throw error;
  }
}

export async function getBuildStatus(jobId: string) {
  try {
    const response = await axios.get(`${BASE_URL}/api/build-status/${jobId}`);
    return response.data;
  } catch (error: any) {
    throw error;
  }
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