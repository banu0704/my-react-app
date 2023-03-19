import styled from "styled-components";

const Contact = () => {
  return (
    <Wrapper>
      <h2 className="common-heading">Contact Page</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15451.871636904209!2d78.81684532908065!3d14.486531738002016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb371f79e85f6a9%3A0x86c7b95c81cd3386!2sNakash%20St%2C%20Ganagapeta%2C%20Kadapa%2C%20Andhra%20Pradesh%20516001!5e0!3m2!1sen!2sin!4v1679054239900!5m2!1sen!2sin" 
      width="100%" 
      height="400" 
      style={{border: "0"}} 
      allowFullScreen="" 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/mzbqvlol" 
                method="POST" 
                className="contact-inputs">
            <input 
              type="text"
              placeholder="username"
              name="username"
              required 
              autoComplete="off" />
            <input 
              type="email"
              placeholder="Email"
              name="Email"
              required 
              autoComplete="off" />
            <textarea 
            name="Message"
            placeholder="Enter your message"
            cols="30"
            rows="10"
            required
            autoComplete="off" />
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  padding: 5rem 0;
  text-align: center;
    .container{
      margn-top: 5rem;

        .contact-form{
          max-width: 50rem;
          margin: auto;
          padding: 4rem;

          .contact-inputs{
            display: flex;
            flex-direction: column;
            gap: 3rem;

              input[type="submit"]{
                cursor: pointer;
                transition: all 0.2s;

                  &:hover{
                    background-color: ${({ theme }) => theme.colors.white};
                    border: 1px solid ${({ theme }) => theme.colors.btn};
                    color: ${({ theme }) => theme.colors.btn};
                    transform: scale(0.9);
                  }
              }
          }
        }
    }

`;
export default Contact;