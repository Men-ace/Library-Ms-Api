export const userActivationUrlEmailTemplate = ({email, name, url })=>{
   return {
        from: `"Local library" <${process.env.SMTP_EMAIL}>`, // sender address
    to:email, // list of receivers
    subject: "Hello ✔", // Subject line
    text: `
    Hello ${name} follow the link to activate your account.${url}
    `, // plain text body
    html: `
       <p> Hedllo ${name}</p>
        <br />
<br />

<p> your account has been created. Click the button below to activate your account.</p>

<br />
<br/>

<a href = ${url}> 
<button style="background: green; color: White; padding: 2rem">Activate Now</button> <a/>

<br/>
<br/>

Regards,
<br/>

-----
    
    
    
    `, // html body
  };
}







