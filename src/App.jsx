function App() {
  const name = "Toranaga"
  const x = 4
  const y = 5
  const toranagas_team = [
    "Yoshii Nagakado",
    "Kiyama",
    "Kashigi Yabushige",
    "Toda Hiromatsu",
    "Igarashi"
  ];

  const loggedIn = true

  return (
    <>

      <h1 className="text-3xl font-bold underline">hello</h1>
      <p>I am {name}.</p>
      <p>And I know {x} + {y} is {x + y}</p>

      <ul>
        {toranagas_team.map((member, index) => (
          <li key={index}>{member}</li>
        ))}
      </ul>

      <hr className="pt-3 mt-3" />
        {loggedIn ? <h1>{name}</h1>: ''}
        {loggedIn && <h1>{name}</h1>}
    </>

  )
}

export default App
