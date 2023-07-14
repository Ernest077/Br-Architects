import { FC } from 'react';
import cls from './Header.module.scss';
import { Navbar } from '../Navbar/Navbar';

const Header: FC = () => {
	return (
		<>
			<Navbar />
			<header className={cls.Header}>
				<img className={cls.Img} src='https://www.w3schools.com/w3images/architect.jpg'></img>
				<div className={cls.ImgContent}>
					<h1>
						<span className={cls.ImgConSpan}>
							<b>BR</b>
						</span>
						<span className={cls.ImgConSpan2}>
							Architects
						</span>
					</h1>
				</div>
			</header>
		</>
	);
};

export default Header;
