import { Request, Response } from 'express';
import Publishers from '../models/publishers.model.js';

export const pulishersList = async (req: Request, res: Response) => {
    try {
        const publishers = await Publishers.find();
        return res.status(200).json(publishers);
    } catch (error: any) {
        console.error('Error in pulishersList:', error);
        return res.status(500).json({ message: 'Something went wrong listing publishers', error: error.message });
    }
};

export const pulisherCreate = async (req: Request, res: Response) => {
    try {
        const { name, image } = req.body;
        console.log('Creating publisher with body:', req.body);
        const publisher = new Publishers({ name, image });
        await publisher.save();
        
        return res.status(201).json(publisher);
    } catch (error: any) {
        console.error('Error in pulisherCreate:', error);
        return res.status(500).json({ 
            message: 'Something went wrong while creating publisher', 
            error: error.message || error 
        });
    }
};

export const pulisherUpdate = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, image } = req.body;
        const publisher = await Publishers.findByIdAndUpdate(id, { name, image }, { new: true });
        return res.status(200).json(publisher);
    } catch (error: any) {
        console.error('Error in pulisherUpdate:', error);
        return res.status(500).json({ message: 'Something went wrong updating publisher', error: error.message });
    }
};

export const pulisherDelete = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const publisher = await Publishers.findByIdAndDelete(id);
        return res.status(200).json(publisher);
    } catch (error: any) {
        console.error('Error in pulisherDelete:', error);
        return res.status(500).json({ message: 'Something went wrong deleting publisher', error: error.message });
    }
};
