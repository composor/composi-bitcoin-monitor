import {h, Component} from 'composi'
import {title} from './components/title'

import {BitcoinMonitor} from './components/bitcoinMonitor/BitcoinMonitor'
import { BitcoinService}  from './services/bitcoinService';
const bitcoinService = new BitcoinService();
const prices = bitcoinService.getPrices()

// Set state on component.
// Will cause component to render.
title.state = 'Bitcoin Monitor'

const bit = new BitcoinMonitor()
// window.bit = bit;
