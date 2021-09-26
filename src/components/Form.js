import React, { useState } from "react";

const Form = () => {
	const [values, setValues] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: "",
	});

	const changeHandler = e => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const clickHandler = () => {
		const errorTexts = [...document.querySelectorAll(".error-text")];
		const inputs = [...document.querySelectorAll(".form_value")];
		const emailAdress = inputs[2].value;
		const isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

		inputs.filter(el => {
			if (el.value === "") {
				el.classList.add("error");
				el.nextSibling.classList.remove("hidden");
				el.placeholder = "";
				inputs
					.reduce((a, e, i) => (e.value === "" ? a.concat(i) : a), [])
					.forEach(i => errorTexts[i].classList.remove("hidden"));
			} else if (el.value !== "") {
				el.classList.remove("error");
				el.nextSibling.classList.add("hidden");
				inputs
					.reduce((a, e, i) => (e.value !== "" ? a.concat(i) : a), [])
					.forEach(i => errorTexts[i].classList.add("hidden"));
			}
			return el;
		});

		if (!isValid.test(emailAdress)) {
			errorTexts[2].classList.remove("hidden");
			inputs[2].nextSibling.classList.remove("hidden");
			inputs[2].classList.add("error");
			inputs[2].placeholder = "email@example/com";
		}
	};

	return (
		<section className='form-section'>
			<button id='try-btn'>
				<span>Try it free 7 days </span>then $20/mo. thereafter
			</button>

			<form className='form'>
				<div>
					<input
						className='form_value'
						name='firstName'
						type='text'
						value={values.firstName}
						placeholder='First Name'
						onChange={changeHandler}
					/>

					<svg
						className='hidden'
						width='24'
						height='24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g fill='none' fillRule='evenodd'>
							<circle fill='#FF7979' cx='12' cy='12' r='12' />
							<rect fill='#FFF' x='11' y='6' width='2' height='9' rx='1' />
							<rect fill='#FFF' x='11' y='17' width='2' height='2' rx='1' />
						</g>
					</svg>
				</div>
				<p className='error-text hidden'>First Name cannot be empty</p>
				<div>
					<input
						className='form_value'
						name='lastName'
						type='text'
						value={values.lastName}
						placeholder='Last Name'
						onChange={changeHandler}
					/>
					<svg
						className='hidden'
						width='24'
						height='24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g fill='none' fillRule='evenodd'>
							<circle fill='#FF7979' cx='12' cy='12' r='12' />
							<rect fill='#FFF' x='11' y='6' width='2' height='9' rx='1' />
							<rect fill='#FFF' x='11' y='17' width='2' height='2' rx='1' />
						</g>
					</svg>
				</div>
				<p className='error-text hidden'>Last Name cannot be empty</p>
				<div>
					<input
						className='form_value'
						name='email'
						type='email'
						value={values.email}
						placeholder='Email Address'
						onChange={changeHandler}
					/>
					<svg
						className='hidden'
						width='24'
						height='24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g fill='none' fillRule='evenodd'>
							<circle fill='#FF7979' cx='12' cy='12' r='12' />
							<rect fill='#FFF' x='11' y='6' width='2' height='9' rx='1' />
							<rect fill='#FFF' x='11' y='17' width='2' height='2' rx='1' />
						</g>
					</svg>
				</div>
				<p className='error-text hidden'>Looks like this is not an email</p>
				<div>
					<input
						className='form_value'
						name='password'
						type='password'
						value={values.password}
						placeholder='Password'
						securetext='true'
						onChange={changeHandler}
					/>
					<svg
						className='hidden'
						width='24'
						height='24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<g fill='none' fillRule='evenodd'>
							<circle fill='#FF7979' cx='12' cy='12' r='12' />
							<rect fill='#FFF' x='11' y='6' width='2' height='9' rx='1' />
							<rect fill='#FFF' x='11' y='17' width='2' height='2' rx='1' />
						</g>
					</svg>
				</div>
				<p className='error-text hidden'>Password cannot be empty</p>
				<div>
					<button type='button' onClick={clickHandler}>
						CLAIM YOUR FREE TRIAL
					</button>
				</div>
				<div>
					<p className='term'>
						By clicking the button, you are agreeing to our&nbsp;
						<span>Terms and Services</span>
					</p>
				</div>
			</form>
		</section>
	);
};

export default Form;
