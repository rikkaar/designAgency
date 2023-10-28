import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const NotFound = () => {
	let navigate = useNavigate();

	return (
			<div>
				<Helmet>
					<title>404 - Not Found</title>
				</Helmet>
				<div className={'error404'}>
					<div className={'error404Content'}>
						<h1 className={'error404__title'}>404</h1>
						<h1 className={'error404__subtitle'}>Такой страницы не существует!</h1>
						<button
							className={'btn error404__btn'}
							onClick={() => navigate('/')}
						>
							На главную
						</button>
					</div>
				</div>
			</div>
	);
};

export default NotFound