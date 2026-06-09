import { TPublisher, TPublisherFormData } from '@/components/Publishers/Publishers.types';
import axiosInstance from '../axiosInstance';
import { endpoints } from '../endpoints';

export async function getAllPublishers(): Promise<TPublisher[]> {
  try {
    const res = await axiosInstance.get(endpoints.publisher.getall);
    return res.data;
  } catch (error) {
    console.error('Error in getAllPublishers:', error);
    throw error;
  }
}

export async function createPublisher(data: TPublisherFormData): Promise<TPublisher> {
  try {
    const res = await axiosInstance.post(endpoints.publisher.create, data);
    return res.data;
  } catch (error) {
    console.error('Error in createPublisher:', error);
    throw error;
  }
}

export async function updatePublisher(id: string, data: TPublisherFormData): Promise<TPublisher> {
  try {
    const res = await axiosInstance.put(endpoints.publisher.update.replace(':id', id), data);
    return res.data;
  } catch (error) {
    console.error('Error in updatePublisher:', error);
    throw error;
  }
}

export async function deletePublisher(id: string): Promise<TPublisher> {
  try {
    const res = await axiosInstance.delete(endpoints.publisher.delete.replace(':id', id));
    return res.data;
  } catch (error) {
    console.error('Error in deletePublisher:', error);
    throw error;
  }
}
