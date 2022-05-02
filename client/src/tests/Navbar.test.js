import React from "react";
import '@testing-library/jest-dom/extend-expect'
import {screen, render} from '@testing-library/react'
import Navbar from "../components/Navbar";

test('has appropriate links', async () => {
    const {container} = render(<Navbar />)
    const links = container.querySelector('.links')
    console.log(links)
    screen(links)
    expect(links).toBeDefined()
})