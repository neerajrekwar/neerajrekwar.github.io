// app/components/DataSet.tsx
import React from 'react';
import data from '../blog/data/dataset.json';

interface DataItem {
    id: string;
    media_url: string;
    media_type: string;
    timestamp: string;
    caption?: string;
    permalink?: string;
    children?: {
      data: { id: string }[];
    };
}

const DataSet: React.FC = () => {
    return (
        <div className="flex">
            {data.data.slice(0, 4).map((item: DataItem) => (
                <div key={item.id} className="relative flex rounded-sm gap-2 bg-seven overflow-hidden w-1/4 ">
                    <div className='overflow-hidden p-1 rounded-sm'>
                        
                        <img
                            src={item.media_url}
                            alt={item.timestamp}
                            className="w-full h-auto hover:opacity-75 transition-all duration-800 rounded object-cover"
                        /> <ul>
                        {/* {item.children?.data.map((child) => (
                          <li key={child.id}>Child ID: {child.id}</li>
                        ))} */}
                      </ul>
                        
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DataSet;
