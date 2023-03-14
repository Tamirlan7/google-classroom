import React from "react"
import cl from './ImportIcons.module.css';
import { ReactComponent as GoogleDriveIcon } from '../../assets/icons/google-drive.svg'
import { ReactComponent as YoutubeIcon } from '../../assets/icons/youtube.svg'
import { ReactComponent as ToUploadIcon } from '../../assets/icons/to-upload.svg'
import { ReactComponent as AddLinkIcon } from '../../assets/icons/add-link.svg'


interface ImportIconsProps {
    className?: string
}

const ImportIcons: React.FC<ImportIconsProps> = ({ className }) => {

    return (
        <>
            <figure className={`${cl['import-icon__block']} ${className}`}>

                <GoogleDriveIcon />

            </figure>

            <figure className={`${cl['import-icon__block']} ${className}`}>

                <YoutubeIcon />

            </figure>

            <figure className={`${cl['import-icon__block']} ${className}`}>

                <ToUploadIcon />

            </figure>

            <figure className={`${cl['import-icon__block']} ${className}`}>

                <AddLinkIcon />

            </figure>
        </>
    )
}


export default ImportIcons
