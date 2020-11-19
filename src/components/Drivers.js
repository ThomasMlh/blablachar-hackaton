import styled from "styled-components";

const Component = styled.div`
  background-color: #fbf7ef;
  padding: 2em 1em;
`;

const ProfilInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
`;

const UserMainInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const UserImg = styled.img`
  max-width: 20vw;
  height: auto;
  margin-right: 1em;
`;

const UserDescr = styled.div`
  margin-left: 1em;
  width: 50vw;
`;

const UserSecondInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const BoxPersonality = styled.div`
  margin-right: 1em;
  width: 20vw;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  background-color: #faeed1;
  height: 20vh;
  display: flex;
  text-align: center;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  line-height: 1.4em;
`;

const Description = styled.p`
  width: 50vw;
  height: 20vh;
  background-color: #faeed1;
`;

const TextDescr = styled.p`
  text-align: justify;
  margin: 0 0.3em;
`;

const TitleDescr = styled.h4`
  text-align: left;
  margin-left: 0 0.3em;
`;

const Title = styled.h1`
  margin-left: 2em;
`;

const Comments = styled.div`
  text-align: justify;
  margin: 0 5vw;
  width: 80vw;
`;

const SndTitle = styled.h2`
  margin-left: 3em;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 20vw;
  margin-left: 4em;
`;

const StyledInput = styled.input`
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background: #fbf7ef;
  outline: none;
  margin: 1em 0;
  width: 30vw;
  padding: 0.5em 0 0.5em 5px;
`;

const StyledTextarea = styled.textarea`
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background: #fbf7ef;
  padding: 0.5em 0 0.5em 5px;
  outline: none;
  width: 70vw;
  height: 10vh;
  resize: none;
`;

const StyledButton = styled.button`
  display: block;
  float: right;
  line-height: 2em;
  padding: 0 20px;
  border: none;
  background: #e9c47b;
  color: white;
  letter-spacing: 2px;
  transition: 0.2s all ease-in-out;
  border-bottom: 2px solid transparent;
  outline: none;
  border-radius: 5px;
  margin: 1em 0;
  &:hover {
    background: #fbf7ef;
    color: #e9c47b;
    border: 2px solid #e9c47b;
  }
`;

export default function Drivers() {
  return (
    <Component>
      <ProfilInfo>
        <UserMainInfo>
          <UserImg
            src="https://www.geekasia.com/wp-content/uploads/mona_lisa_chuck_norris.jpg"
            alt=""
          />
          <UserDescr>
            <h1>Chuck Norris</h1>
            <p>
              Rating : 5.0 <span>&#11088;</span>
            </p>
            <p>Chariot : Zeus 8</p>
            <p>Age : 152 ans</p>
            <p>Trips made : 14</p>
            <p>Trips achieved : 14</p>
          </UserDescr>
        </UserMainInfo>
        <UserSecondInfo>
          <BoxPersonality>
            <StyledUl>
              <li>Moderate Alcoholic</li>
              <li>Drive hands free</li>
              <li>Chatty</li>
            </StyledUl>
          </BoxPersonality>
          <Description>
            <TitleDescr>Description</TitleDescr>
            <TextDescr>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </TextDescr>
          </Description>
        </UserSecondInfo>
      </ProfilInfo>
      <Title>Comments</Title>
      <Comments>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua." - TONTON
          TOTO
        </p>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua." - TATA
          YOYO
        </p>
      </Comments>
      <div>
        <SndTitle>Leave a comment</SndTitle>
        <StyledForm>
          <label>
            <StyledInput type="text" placeholder="Your name" />
          </label>
          <label>
            <StyledTextarea placeholder="Leave a comment..."></StyledTextarea>
          </label>
          <StyledButton type="submit" value="Post">
            Post
          </StyledButton>
        </StyledForm>
      </div>
    </Component>
  );
}