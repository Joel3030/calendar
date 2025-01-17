export const Navbar = () => {
	return (
		<div className='navbar navbar-dark bg-dark mb-4 px-4'>
			<span className='navbar-brand'>
				<i className='fa-solid fa-calendar'></i>
				&nbsp; Calendar
			</span>
			<button className='btn btn-outline-danger'>
				<i className='fa-solid fa-arrow-right-from-bracket'></i>
				<span className='ms-1'>Salir</span>
			</button>
		</div>
	);
};
