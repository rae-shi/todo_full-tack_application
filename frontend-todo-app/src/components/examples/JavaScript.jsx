const person = {
  name: "RRRR",
  address: "Road 1",
  profile: ["discord", "ins", "linkedIn", "facebook"],
  printProfile: () => {
    person.profile.map((x) => console.log(x));
  },
};

export default function JavaScipt() {
  return (
    <div>
      <div>JS {person.name}</div>
      <div> {person.printProfile()}</div>
    </div>
  );
}
