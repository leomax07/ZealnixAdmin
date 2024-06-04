import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import { Image } from 'primereact/image';
import React from 'react';
// import { Image, Avatar, AvatarGroup } from 'primereact/avatar';

interface IcuRoomListItemProps {
    imageSrc: string;
    title: string;
    id: string;
    admission: string;
    patientName: string;
    doctorAvatars: string[];
}

const IcuRoomListItem: React.FC<IcuRoomListItemProps> = ({
    imageSrc,
    title,
    id,
    admission,
    patientName,
    doctorAvatars,
}) => {
    return (
        <div className="overalay_action__list">
            <div className="flex justify-content-center">
                <Image src={imageSrc} alt="Image" width="300" />
            </div>
            <div style={{ display: 'flex', gap: '4px', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <span className='font_tiltle'>{title}</span>
                    <span className='font_subtiltle'>{id}</span>
                </div>
                <Image src="https://i.ibb.co/7z0Yxrg/dout-Button.png" alt="Image" width="30" />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', gap: '10px' }}>
                <Image src="https://i.ibb.co/XF0zn7S/calendar.png" alt="Image" width="20" />
                <div className='font_subtiltle'>Admission : {admission}</div>
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'space-between' }}>
                <div>
                    <div className='font_tiltle ' style={{ marginBottom: '4px' }}>Patient</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Avatar image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png" shape="circle" />
                        <div className='font_subtiltle'>{patientName}</div>
                    </div>
                </div>
                <div>
                    <div className='font_tiltle'>Doctors</div>
                    <AvatarGroup>
                        {doctorAvatars.map((avatarSrc, index) => (
                            <Avatar key={index} image={avatarSrc} shape="circle" />
                        ))}
                    </AvatarGroup>
                </div>
            </div>
        </div>
    );
};

export default IcuRoomListItem;
