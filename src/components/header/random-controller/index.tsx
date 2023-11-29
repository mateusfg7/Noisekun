import React, { useEffect, useRef } from 'react'
import { FiZap, FiZapOff } from 'react-icons/fi'

import { useThemeStore } from '@/stores/theme-store'
import { controllerButton } from './styles'
import { useGlobalRandomModeStore } from '@/stores/random-mode-store'
import { useSoundsStateStore } from '@/stores/sounds-state-store'