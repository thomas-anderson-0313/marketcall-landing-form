import React, {useState, useEffect} from 'react';
//@ts-ignore
import TagManager from 'react-gtm-module'
import axios from "axios";
import './styles.scss'

import { scrollTo } from '../utils';

import Head_bg from '../assets/hero5.png'

// google tag manager

const tagManagerArgs = {
    gtmId: 'GTM-5B4S3PH'
}

TagManager.initialize(tagManagerArgs)

export default function Third_EN() {

	useEffect(() => {
		window.document.title="Check Your Eligibility Now";

		axios
      .get(process.env.REACT_APP_PROXY + `/visits/5`)
      .then(({ data }) => {
        if(data.length===0){
			const visits = {
				visits: 1,
				views: 0,
				calls: 0,
				positives: 0,
				negatives: 0,
			}

			axios
			.post(
				process.env.REACT_APP_PROXY + `/visits/create-visits5`,
				visits
			)
			.catch((err) =>
				console.log(err)
			);

		}else{
			const _id = data[0]._id
			const _visits = data[0].visits
			const _views = data[0].views
			const _calls = data[0].calls
			const _positives = data[0].positives
			const _negatives = data[0].negatives
			
			const visits = {
				visits: _visits+1,
				views: _views,
				calls: _calls,
				positives: _positives,
				negatives: _negatives,
			}
			axios
			.put(
				process.env.REACT_APP_PROXY + `/visits/update-visits5/`+_id,
				visits
			)
			.catch((err) =>
				console.log(err)
			);
				}
			})
		.catch((error) => {
			console.log(error);
		});

	}, [])

	const handleCall = () => {
		axios
		.get(process.env.REACT_APP_PROXY + `/visits/5`)
		.then(({ data }) => {
			const _id = data[0]._id
			const _visits = data[0].visits
			const _views = data[0].views
			const _calls = data[0].calls
			const _positives = data[0].positives
			const _negatives = data[0].negatives
			const visits = {
				visits: _visits,
				views: _views,
				calls: _calls+1,
				positives: _positives,
				negatives: _negatives,
			}
		axios
		.put(
			process.env.REACT_APP_PROXY + `/visits/update-visits5/`+_id,
			visits
		)
		.catch((err) =>
			console.log(err)
		);
	  })
	}


	const [quiz, setQuiz] = useState("Are you over 64?")
	const [step, setStep] = useState("process")
	const [min, setMin] = useState(3)
	const [second, setSecond] = useState<any>(0)    
	const [yes, setYes] = useState("Yes, I'm 65 or Older")
	const [no, setNo] = useState("No, I'm 64 or Younger")
	
	
	const stepProcess = () => {
		if(step==="Reviewing Your Answers..."){
			setTimeout(() => {
			  setStep("Matching With Best Options...")
			  }, 1500);
			}
		  if(step==="Matching With Best Options..."){
			setTimeout(() => {
			  setStep("Confirming Eligibility...")
			  }, 1500);
			}
		  if(step==="Confirming Eligibility..."){
			setTimeout(() => {
			  setStep("completed")

			  axios
				.get(process.env.REACT_APP_PROXY + `/visits/5`)
				.then(({ data }) => {
					const _id = data[0]._id
					const _visits = data[0].visits
					const _views = data[0].views
					const _calls = data[0].calls
					const _positives = data[0].positives
					const _negatives = data[0].negatives
					const visits = {
						visits: _visits,
						views: _views+1,
						calls: _calls,
						positives: _positives,
						negatives: _negatives,
					}
				axios
				.put(
					process.env.REACT_APP_PROXY + `/visits/update-visits5/`+_id,
					visits
				)
				.catch((err) =>
					console.log(err)
				);
			})
			  }, 1500);
			}
	  
		  if(step==="completed"){
			const startTime:any = new Date();
			const timer = setInterval(()=> {
			  const nowTime:any = new Date();
			  // setMin(min+1)
			  setSecond((180-Math.round((nowTime-startTime)/1000))%60)
			  setMin(Math.floor((180-Math.round((nowTime-startTime)/1000))/60))
			}, 1000)
			// if(Math.round((new Date()-startTime)/1000)){
			// 	console.log("dsfdsfdsf");
			// 	return clearInterval(timer)
			// }
		}
	}

	// React.useEffect(() => {
	//                 // getInfo()
	//                 console.log(time);
	//                 stepProcess()
	//                 const timer = setTimeout(() => setTime(+new Date()), 1000)
	//                 return () => clearTimeout(timer)
	//         }, [time]);


	useEffect(() => {
		stepProcess()
	}, [step])

	const topScroll = (id: any) => {
			// window.scrollTo(0, 0);
			// window.innerWidth < 1200 ? setIsMobile(false) : scrollTo({ id });
			scrollTo({ id });
		}

	const handleQuizP = () => {
		topScroll("btn");
		if(quiz === "Are you over 64?"){
			setQuiz("Are You On Medicare or Medicaid?")
			setYes("Yes")
			setNo("No")
		}else{
			setStep("Reviewing Your Answers...")
			topScroll("top");
		}

		axios
		.get(process.env.REACT_APP_PROXY + `/visits/5`)
		.then(({ data }) => {
			const _id = data[0]._id
			const _visits = data[0].visits
			const _views = data[0].views
			const _calls = data[0].calls
			const _positives = data[0].positives
			const _negatives = data[0].negatives
			const visits = {
				visits: _visits,
				views: _views,
				calls: _calls,
				positives: _positives+1,
				negatives: _negatives,
			}
		axios
		.put(
			process.env.REACT_APP_PROXY + `/visits/update-visits5/`+_id,
			visits
		)
		.catch((err) =>
			console.log(err)
		);
	  })
	}

	const handleQuizN = () => {
		topScroll("btn");
		if(quiz === "Are you over 64?"){
			setQuiz("Are You On Medicare or Medicaid?")
			setYes("Yes")
			setNo("No")
		}else{
			setStep("Reviewing Your Answers...")
			topScroll("top");
		}

		axios
		.get(process.env.REACT_APP_PROXY + `/visits/5`)
		.then(({ data }) => {
			const _id = data[0]._id
			const _visits = data[0].visits
			const _views = data[0].views
			const _calls = data[0].calls
			const _positives = data[0].positives
			const _negatives = data[0].negatives
			const visits = {
				visits: _visits,
				views: _views,
				calls: _calls,
				positives: _positives,
				negatives: _negatives+1,
			}
		axios
		.put(
			process.env.REACT_APP_PROXY + `/visits/update-visits5/`+_id,
			visits
		)
		.catch((err) =>
			console.log(err)
		);
	  })
	}

    return(
        <div>
			<div className='top-sticky-blue' id='top'>My Senior Saving Journal</div>
			{step==="process"?
				<>
				<div className='main-container-5'>
					<div className='main-descrition-5'>
					<div className='main-des-title'>US Businessowners are getting $26,000 per employee they kept on a payroll during the "National Lockdown". See If You Qualify For Up To $26,000 Per Employee</div>
					{/* <img src = {Head_img} alt = "head" width = "100%" /> */}
                    {/* <img className='topic-img-5' src = {Head_bg} alt = "head"/> */}
					<div className="video-responsive">
						<iframe
							width="853"
							height="480"
							src={`https://www.youtube.com/embed/bNUDWh6kOa4`}
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
							// title="Embedded youtube"
						/>
					</div>
					{/* <div className='main-des-5'>Americans over 64 can pre-qualify for the 2023 Flex Spending Card that gives them up to $3600. Seniors can use the funds for dental or vision, groceries, rent, utility bills, medication and more.</div> */}
					<div className='main-des-5' style = {{marginTop:"1rem"}}>Check Your Eligibility:</div>
					</div>
					<div className='survey'>
						<div className='quiz-5' id='btn'>Excluding yourself, did you employ W-2 employees in 2020 or 2021?</div>
						<div className='answer'>
							<div className='answer-btn-5'>Yes</div>
							<div className='answer-btn-5'>No</div>
						</div>
						<div className='quiz-5' id='btn'>Was your business negatively impacted by government orders in 2020 or 2021?</div>
						<div className='answer'>
							<div className='answer-btn-5'>Yes</div>
							<div className='answer-btn-5'>No</div>
						</div>
						<div className='quiz-5' id='btn'>Did your business experience a year-over-year revenue decrease during any quarter of 2020 or 2021?</div>
						<div className='answer'>
							<div className='answer-btn-5'>Yes</div>
							<div className='answer-btn-5'>No</div>
						</div>
						<div className='form-data'>
							<div className='quiz-5' id='btn'>When did you start your business?</div>
							<input type="month" className='input-form-style'></input>
						</div>
						<div className='form-data'>
							<div className='quiz-5' id='btn'>How many W-2 employees did you employ on average in 2020?</div>
							<input type="number" className='input-form-style'></input>
						</div>
						<div className='form-data'>
							<div className='quiz-5' id='btn'>How many W-2 employees did you employ on average in 2021?</div>
							<input type="number" className='input-form-style'></input>
						</div>
						<div className='form-data'>
							<div className='form-data-key' id='btn'>First name</div>
							<input type="text" className='input-form-style'></input>
						</div>
						<div className='form-data'>
							<div className='form-data-key' id='btn'>Last name</div>
							<input type="text" className='input-form-style'></input>
						</div>
						<div className='form-data'>
							<div className='form-data-key' id='btn'>Email address</div>
							<input type="email" className='input-form-style'></input>
						</div>
						<div className='form-data'>
							<div className='form-data-key' id='btn'>Mobile phone</div>
							<input type="tel" className='input-form-style'></input>
						</div>
						<div className='form-data'>
							<div className='form-data-key' id='btn'>Business name</div>
							<input type="text" className='input-form-style'></input>
						</div>
						<div className='submit-btn'>Submit</div>
					</div>
				</div>
				</>:
				(
				step!=="process" && step!=="completed"?
					<div className='checking' style={{fontWeight:"700"}}>
					{step}
					</div>:
					<div className='checking'>
						<div className='congrats'>Congratulation, You Qualify!</div>
						<div className='top-description-5'>Make A <b>Quick Call</b> To Claim Your Flex Card!</div>
						<div className='spots-count'>Spots remaining: 4</div>
						<div className='tap-direction'>👇 TAP BELOW TO CALL 👇</div>
						<a href = "tel:+18885264568">
							<div className='call-btn' onClick={handleCall}>
								CALL (888) 526-4568
							</div>
						</a>
						<div className='sub-title'>We Have Reserved Your Spot</div>
						<div className='sub-description'>Due to high call volume, your official agent is waiting for only <b>3 minutes</b>, then your spot will not be reserved.</div>
						<div className='timer'>
							<div className='timer-cell'>{min}</div>
							<div className='timer-cell'>:</div>
							<div className='timer-cell'>{second}</div>
						</div>
					</div>
				)
			}
			<div className='footer'>
				<div className='terms'>Terms & Conditions | Privacy Policy</div>
				<div className='copyright'>Copyright © 2022 - All right reserved Daily America Savings.</div>
			</div>
		</div>
    )
} 