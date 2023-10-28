
import { ENV } from '@env/index'
import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from 'axios'

const headers: Readonly<Record<string, string | boolean>> = {
	Accept: 'application/json',
	'Content-Type': 'application/json; charset=utf-8',
}

// Поскольку используем Vk mini apps, в Header Authorization добавляем фрейм с подписью
const injectAuthorization = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
	try {
		config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
		return config
	} catch (error) {
		throw new Error('User is not specified')
	}
}

class Http {
	// Создание пустого инстанса Аксиоса, на который мы будем вешать все настройки
	private instance: AxiosInstance | null = null

	// Геттер возвращает либо инстанс, либо инициирует создание инстанса
	private get http(): AxiosInstance {
		return this.instance != null ? this.instance : this.initHttp()
	}

	// Инициализация настроек инстанса
	initHttp() {
		const http = axios.create({
			baseURL: ENV.API,
			withCredentials: false,
			headers,
		})

		// Вешаем интерцептор на запрос
		http.interceptors.request.use(injectAuthorization, (error) => Promise.reject(error))

		// Вешаем интерцептор на ответ
		// Пока пусть будет в комменте, тк удобнее пока использовать
		// Промисы для отлавливания ошибок

		// http.interceptors.response.use(
		// 	(response) => response,
		// 	(error) => {
		// 		const {response} = error
		//     console.error("FromInterceptor" + response)
		// 		return this.handleError(response)
		// 	},
		// )

		this.instance = http
		return http
	}

	request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
		return this.http.request(config)
	}

	get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
		return this.http.get<T, R>(url, config)
	}

	post<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
		return this.http.post<T, R>(url, data, config)
	}

	put<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
		return this.http.put<T, R>(url, data, config)
	}

	patch<T = any, R = AxiosResponse<T>>(url: string, data?: T, config?: AxiosRequestConfig): Promise<R> {
		return this.http.patch<T, R>(url, data, config)
	}

	delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
		return this.http.delete<T, R>(url, config)
	}
}

export const $api = new Http()
