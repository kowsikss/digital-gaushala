import { useState } from "react";

function EnquiryForm(){

const [step,setStep]=useState(1)

return(
<div className="form">

{step===1 && (
<div>
<input placeholder="Name"/>
<button onClick={()=>setStep(2)}>Next</button>
</div>
)}

{step===2 && (
<div>
<input placeholder="Gaushala name"/>
<button onClick={()=>setStep(3)}>Submit</button>
</div>
)}

{step===3 && (
<h2>Submitted</h2>
)}

</div>
)
}

export default EnquiryForm