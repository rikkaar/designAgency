import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	envDir: 'src/env',
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@env': path.resolve(__dirname, './src/env'),
			'@components': path.resolve(__dirname, './src/components'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@store': path.resolve(__dirname, './src/store'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@http': path.resolve(__dirname, './src/http'),
			'@services': path.resolve(__dirname, './src/services'),
			'@models': path.resolve(__dirname, './src/models'),
			'@router': path.resolve(__dirname, './src/router'),
			'@helpers': path.resolve(__dirname, './src/helpers'),
			'@consts': path.resolve(__dirname, './src/consts'),
			'@assets': path.resolve(__dirname, './src/assets'),
			// '@styles': path.resolve(__dirname, './src/styles'),
		},
	},
})
