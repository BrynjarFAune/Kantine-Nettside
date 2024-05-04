
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
	name: 'my-custom-theme',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "255 255 255",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #b92c20 
		"--color-primary-50": "245 223 222", // #f5dfde
		"--color-primary-100": "241 213 210", // #f1d5d2
		"--color-primary-200": "238 202 199", // #eecac7
		"--color-primary-300": "227 171 166", // #e3aba6
		"--color-primary-400": "206 107 99", // #ce6b63
		"--color-primary-500": "185 44 32", // #b92c20
		"--color-primary-600": "167 40 29", // #a7281d
		"--color-primary-700": "139 33 24", // #8b2118
		"--color-primary-800": "111 26 19", // #6f1a13
		"--color-primary-900": "91 22 16", // #5b1610
		// secondary | #a53de1 
		"--color-secondary-50": "242 226 251", // #f2e2fb
		"--color-secondary-100": "237 216 249", // #edd8f9
		"--color-secondary-200": "233 207 248", // #e9cff8
		"--color-secondary-300": "219 177 243", // #dbb1f3
		"--color-secondary-400": "192 119 234", // #c077ea
		"--color-secondary-500": "165 61 225", // #a53de1
		"--color-secondary-600": "149 55 203", // #9537cb
		"--color-secondary-700": "124 46 169", // #7c2ea9
		"--color-secondary-800": "99 37 135", // #632587
		"--color-secondary-900": "81 30 110", // #511e6e
		// tertiary | #196098 
		"--color-tertiary-50": "221 231 240", // #dde7f0
		"--color-tertiary-100": "209 223 234", // #d1dfea
		"--color-tertiary-200": "198 215 229", // #c6d7e5
		"--color-tertiary-300": "163 191 214", // #a3bfd6
		"--color-tertiary-400": "94 144 183", // #5e90b7
		"--color-tertiary-500": "25 96 152", // #196098
		"--color-tertiary-600": "23 86 137", // #175689
		"--color-tertiary-700": "19 72 114", // #134872
		"--color-tertiary-800": "15 58 91", // #0f3a5b
		"--color-tertiary-900": "12 47 74", // #0c2f4a
		// success | #8d9a53 
		"--color-success-50": "238 240 229", // #eef0e5
		"--color-success-100": "232 235 221", // #e8ebdd
		"--color-success-200": "227 230 212", // #e3e6d4
		"--color-success-300": "209 215 186", // #d1d7ba
		"--color-success-400": "175 184 135", // #afb887
		"--color-success-500": "141 154 83", // #8d9a53
		"--color-success-600": "127 139 75", // #7f8b4b
		"--color-success-700": "106 116 62", // #6a743e
		"--color-success-800": "85 92 50", // #555c32
		"--color-success-900": "69 75 41", // #454b29
		// warning | #594f9b 
		"--color-warning-50": "230 229 240", // #e6e5f0
		"--color-warning-100": "222 220 235", // #dedceb
		"--color-warning-200": "214 211 230", // #d6d3e6
		"--color-warning-300": "189 185 215", // #bdb9d7
		"--color-warning-400": "139 132 185", // #8b84b9
		"--color-warning-500": "89 79 155", // #594f9b
		"--color-warning-600": "80 71 140", // #50478c
		"--color-warning-700": "67 59 116", // #433b74
		"--color-warning-800": "53 47 93", // #352f5d
		"--color-warning-900": "44 39 76", // #2c274c
		// error | #e5ef7d 
		"--color-error-50": "251 253 236", // #fbfdec
		"--color-error-100": "250 252 229", // #fafce5
		"--color-error-200": "249 251 223", // #f9fbdf
		"--color-error-300": "245 249 203", // #f5f9cb
		"--color-error-400": "237 244 164", // #edf4a4
		"--color-error-500": "229 239 125", // #e5ef7d
		"--color-error-600": "206 215 113", // #ced771
		"--color-error-700": "172 179 94", // #acb35e
		"--color-error-800": "137 143 75", // #898f4b
		"--color-error-900": "112 117 61", // #70753d
		// surface | #89cb9b 
		"--color-surface-50": "237 247 240", // #edf7f0
		"--color-surface-100": "231 245 235", // #e7f5eb
		"--color-surface-200": "226 242 230", // #e2f2e6
		"--color-surface-300": "208 234 215", // #d0ead7
		"--color-surface-400": "172 219 185", // #acdbb9
		"--color-surface-500": "137 203 155", // #89cb9b
		"--color-surface-600": "123 183 140", // #7bb78c
		"--color-surface-700": "103 152 116", // #679874
		"--color-surface-800": "82 122 93", // #527a5d
		"--color-surface-900": "67 99 76", // #43634c

	}
}
