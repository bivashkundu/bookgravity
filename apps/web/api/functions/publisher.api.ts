import { TPublisherData } from '@/components/HomeOther/Publishers/PublisherData.type';
import axiosInstance from '../axiosInstance';
import { endpoints } from '../endpoints';

export async function getAllPublishers(): Promise<TPublisherData[]> {
  try {
    const res = await axiosInstance.get(endpoints.publisher.getall);
    return res.data;
  } catch (error) {
    console.error('Error in getAllPublishers:', error);
    throw error;
  }
}
