import React from 'react'
import Icon from '@mdi/react'
import { mdiInstagram } from '@mdi/js'
import { mdiTwitter } from '@mdi/js'
import {mdiFacebook} from "@mdi/js";
import {mdiYoutube} from "@mdi/js";
import '../css/Footer.css'

function Footer() {
	return (
		<footer>
			<ul>
				<li>
					<Icon
						path={mdiInstagram}
						size={1}
					/>
				</li>
				<li>
					<Icon
						path={mdiTwitter}
						size={1}
					/>
				</li>
				<li>
					<Icon
						path={mdiYoutube}
						size={1}
					/>
				</li>
				<li>
					<Icon
						path={mdiFacebook}
						size={1}
					/>
				</li>
			</ul>
			<p>&copy; Copyright 2022 Jan Pilch</p>
		</footer>
	)
}

export default Footer