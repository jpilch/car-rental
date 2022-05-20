import {mdiClipboardCheckMultipleOutline} from '@mdi/js'
import Icon from '@mdi/react'

const OfferBenefit = ({ text }) => {
    return (
        <li>
            <Icon
                path={mdiClipboardCheckMultipleOutline}
                size={0.8}
            />
            <p>{text}</p>
        </li>
    )
}

export default OfferBenefit