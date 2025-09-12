import type { PropsWithChildren } from 'react'
import emailArt from '../assets/email.art'
import githubArt from '../assets/github.art'
import linkedinArt from '../assets/linkedin.art'
import styles from './ExternalLinks.module.css'
import TextArt from './TextArt'
import clsx from 'clsx'

interface ExternalLinksProps {
    className?: string
    size?: 'md' | 'lg'
}

function ExternalLinks({ className, size = 'md' }: PropsWithChildren<ExternalLinksProps>) {
    return <ul className={clsx(styles.externalLinks, styles[size], className)}>
        <li>
            <a href='https://github.com/Steffan-Harris' title="Steffan's Github page">
                <TextArt label="ASCII art depicting the Github logo">{githubArt}</TextArt>
            </a>
        </li>
        <li>
            <a href='mailto:contact@steffan.lol' title="Send Steffan an email">
                <TextArt label="ASCII art depicting an email">{emailArt}</TextArt>
            </a>
        </li>
        <li>
            <a href='https://www.linkedin.com/in/steffanharris/' title="Steffan's LinkedIn page">
                <TextArt label="ASCII art depicting the Linkedin logo">{linkedinArt}</TextArt>
            </a>
        </li>
    </ul>
}

export default ExternalLinks