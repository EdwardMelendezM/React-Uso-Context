const Main = ({ theme, text, auth }) => {
  return (
    <main className={theme}>
      {auth ? (
        <p>
          <p>{text.mainHello}</p>
        </p>
      ) : (
        <p>{text.mainWelcome}</p>
      )}
      <p></p>

      <p>{text.mainContent} </p>
    </main>
  );
};

export default Main;
