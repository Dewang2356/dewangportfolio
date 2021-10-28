import React from 'react'

const Loading = (props) => {
	
	return (
		<>
		<div className="main">
		<div class={`spinner-border text-primary ${props.get}`} role="status">
  <span class="sr-only">Loading...</span>
</div>
		</div>
		</>
		)
}

export default Loading