import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
	const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState({
		name: "",
		message: "",
	});
	const [showClearDialog, setShowClearDialog] = useState(false);
	const [clearPassword, setClearPassword] = useState("");
	const [loading, setLoading] = useState(false);

	// Load comments from localStorage on component mount
	useEffect(() => {
		const savedComments = localStorage.getItem('contactComments');
		if (savedComments) {
			setComments(JSON.parse(savedComments));
		}
	}, []);

	// Save comments to localStorage whenever comments change
	useEffect(() => {
		localStorage.setItem('contactComments', JSON.stringify(comments));
	}, [comments]);

	const handleCommentChange = (e) => {
		const { name, value } = e.target;
		setNewComment({
			...newComment,
			[name]: value,
		});
	};

	const handleCommentSubmit = () => {
		setLoading(true);

		const username = newComment.name.trim();
		const message = newComment.message.trim();

		if (username === '' || message === '') {
			setLoading(false);
			toast.error("Please fill all the fields.", {
				position: 'bottom-right',
			});
			return;
		}

		const comment = {
			id: Date.now(),
			name: username,
			message: message,
			timestamp: new Date().toLocaleString(),
		};

		// Add new comment and keep only last 3
		const updatedComments = [comment, ...comments].slice(0, 3);
		setComments(updatedComments);

		setNewComment({
			name: "",
			message: "",
		});

		setLoading(false);
		toast.success("Comment added successfully!", {
			position: 'bottom-right',
		});
	};

	const handleClearComments = () => {
		const today = new Date();
		const datePassword = today.toISOString().split('T')[0]; // Format: YYYY-MM-DD
		
		if (clearPassword === datePassword) {
			setComments([]);
			setClearPassword("");
			setShowClearDialog(false);
			toast.success("Comments cleared successfully!", {
				position: 'bottom-right',
			});
		} else {
			toast.error("Incorrect password.", {
				position: 'bottom-right',
			});
		}
	};

	const contactInfo = {
		phone: "+91 9021380244",
		email: "chintantshah1234@gmail.com",
		linkedin: "https://linkedin.com/in/chintan-shah-33600820a"
	};

	return (
		<div className='relative z-0 bg-black w-screen min-h-screen mt-12'>
			<div className='text-white contact overflow-x-hidden pt-12 mt-8' id='contact'>
				<div className='z-10 w-full max-w-4xl m-auto p-8 rounded-2xl'>
					<p className='font-light'>REACH OUT TO ME</p>
					<h2 className='text-5xl font-extrabold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500'>Contact.</h2>
					
					{/* Contact Information */}
					<div className='mt-12 space-y-6'>
						<div className='bg-gray-900 p-6 rounded-lg'>
							<h3 className='text-2xl font-bold mb-6 text-center'>Get In Touch</h3>
							<div className='space-y-4'>
								<div className='flex items-center space-x-4'>
									<div className='w-12 h-12 bg-gradient-to-r from-gray-500 to-pink-500 rounded-full flex items-center justify-center'>
										<span className='text-lg'>📱</span>
									</div>
									<div>
										<p className='font-medium text-gray-300'>Phone</p>
										<a href={`tel:${contactInfo.phone}`} className='text-pink-400 hover:text-pink-300 transition-colors'>
											{contactInfo.phone}
										</a>
									</div>
								</div>
								
								<div className='flex items-center space-x-4'>
									<div className='w-12 h-12 bg-gradient-to-r from-gray-500 to-pink-500 rounded-full flex items-center justify-center'>
										<span className='text-lg'>📧</span>
									</div>
									<div>
										<p className='font-medium text-gray-300'>Email</p>
										<a href={`mailto:${contactInfo.email}`} className='text-pink-400 hover:text-pink-300 transition-colors'>
											{contactInfo.email}
										</a>
									</div>
								</div>
								
								<div className='flex items-center space-x-4'>
									<div className='w-12 h-12 bg-gradient-to-r from-gray-500 to-pink-500 rounded-full flex items-center justify-center'>
										<span className='text-lg'>💼</span>
									</div>
									<div>
										<p className='font-medium text-gray-300'>LinkedIn</p>
										<a href={contactInfo.linkedin} target='_blank' rel='noopener noreferrer' className='text-pink-400 hover:text-pink-300 transition-colors'>
											Connect with me
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Comments Section */}
					<div className='mt-12'>
						<div className='flex justify-between items-center mb-6'>
							<h3 className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-pink-500'>
								Comments
							</h3>
							{comments.length > 0 && (
								<button
									onClick={() => setShowClearDialog(true)}
									className='px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg text-sm font-medium transition-colors'
								>
									Clear Comments
								</button>
							)}
						</div>

						{/* Add Comment Form */}
						<div className='mb-8 bg-gray-900 p-6 rounded-lg'>
							<h4 className='text-xl font-medium mb-4'>Leave a Comment</h4>
							<div className='space-y-4'>
								<div>
									<label className='block font-medium mb-2'>Your Name</label>
									<input
										type='text'
										name='name'
										value={newComment.name}
										onChange={handleCommentChange}
										placeholder='Enter your name'
										className='w-full py-3 px-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-pink-500 outline-none transition-colors'
									/>
								</div>
								<div>
									<label className='block font-medium mb-2'>Your Message</label>
									<textarea
										rows={4}
										name='message'
										value={newComment.message}
										onChange={handleCommentChange}
										placeholder='Write your comment here...'
										className='w-full py-3 px-4 rounded-lg bg-gray-800 border border-gray-700 focus:border-pink-500 outline-none transition-colors resize-none'
									/>
								</div>
								<button
									onClick={handleCommentSubmit}
									disabled={loading}
									className='px-6 py-3 bg-gradient-to-r from-gray-500 to-pink-500 rounded-lg font-medium hover:from-gray-600 hover:to-pink-600 transition-all disabled:opacity-50'
								>
									{loading ? "Posting..." : "Post Comment"}
								</button>
							</div>
						</div>

						{/* Display Comments */}
						<div className='space-y-4'>
							{comments.length === 0 ? (
								<p className='text-gray-400 text-center py-8'>No comments yet. Be the first to leave a comment!</p>
							) : (
								comments.map((comment) => (
									<div key={comment.id} className='bg-gray-900 p-6 rounded-lg border border-gray-800'>
										<div className='flex justify-between items-start mb-2'>
											<h5 className='font-medium text-pink-400'>{comment.name}</h5>
											<span className='text-sm text-gray-500'>{comment.timestamp}</span>
										</div>
										<p className='text-gray-300 leading-relaxed'>{comment.message}</p>
									</div>
								))
							)}
						</div>
					</div>

					{/* Clear Comments Dialog */}
					{showClearDialog && (
						<div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
							<div className='bg-gray-900 p-6 rounded-lg max-w-md w-full mx-4'>
								<h4 className='text-xl font-bold mb-4'>Clear All Comments</h4>
								<p className='text-gray-300 mb-4'>
									Enter passowrd to clear all comments:
								</p>
								<input
									type='text'
									value={clearPassword}
									onChange={(e) => setClearPassword(e.target.value)}
									placeholder='password'
									className='w-full py-2 px-4 rounded bg-gray-800 border border-gray-700 focus:border-pink-500 outline-none mb-4'
								/>
								<div className='flex space-x-4'>
									<button
										onClick={handleClearComments}
										className='px-4 py-2 bg-red-600 hover:bg-red-700 rounded font-medium'
									>
										Clear
									</button>
									<button
										onClick={() => {
											setShowClearDialog(false);
											setClearPassword("");
										}}
										className='px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded font-medium'
									>
										Cancel
									</button>
								</div>
							</div>
						</div>
					)}
				</div>
				<ToastContainer />
			</div>
		</div>
	);
};

export default Contact;