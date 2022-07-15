let dolphQuotes = [
  "My diamonds alkaline water, not Aquafina",
  "Started in South Memphis, ended up in a mansion (Ayy) Ain't no stylist needed here, crazy with the fashion (Uh-huh)",
  "Remember I went and got a plug, I went got a couple cribs",
  "I got on six chains, three big diamond rings. Trap nigga with a hundred mill later I'll still be the same. All I do is smoke weed, I'm covered up with double G's",
  "Dope boy with dope boy dreams, never thought I'd make it this far",
  "These niggas ain't fuckin' with me and I put that on Ida Mae",
  "Taught myself how to get millions, ain't nobody show us (it's Dolph!)",
  "I don't put nothin' past none of these niggas (Let the BandPlay)",
  "Gave my barber an extra tip just to have me extra crispy, you dig me?",
  "Remember what it feel like to not have shit (I swear) Didn't even have no toilet tissue for when I took a shit (Damn) Now when I wake up, look in the mirror, I can't believe this ",
  "I'm nothin' like the rest, so what the fuck did you expect? To be honest, I don't care 'bout your opinion, where the check?",
  "Them millions keep callin' my phone and I'm headed straight to it",
  "I'mma die 'bout my money, power, and respect (ay) Just count 3 million cash in my bulletproof vest (ha, yeah)",
  "Rich-rich nigga second, I'm a real nigga first-first",
  "What, what the lick read? (Yeah) Baguette AP (Yeah) I bet it all on me (Yeah) I smell like Creed (Yeah) Mixed with good weed (Yeah) I bust my wrist down and put boogers in my ring (Yeah, yeah)",
  "I stay on a plane so much, they don't know if I'm a passenger or the pilot",
  " can show you how to get paid eight ways (okay) Hustled so hard, I ain't had no sleep in eight days (damn) I only ride with carbon or his brother AK (ayy, who that?)",
  "Mama had a crack baby, he went got a couple mil’ (Yeah)",
  "I don't mean no harm, but I been showin' my ass lately (Damn) Large amounts daily (Damn) I been goin' crazy (Damn)",
  "Blind to the bullshit, call me Ray (Ray Charles) My location is the bank, that's where I stay (Yeah, yeah) Hardest worker in show business, call me James (James Brown)",
  "Street nigga, trapper, whatever you wanna call the boy, but he be the real one, though (It's Dolph) He came from the bottom, up under the bottom, but nowadays the boy living, though (It's Dolph)",
  "I pay her bills and buy her designer but I don't love her",
  "Fuck 'em, fuck 'em, fuck 'em",
];

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * dolphQuotes.length);
  document.querySelector("h3").innerText = dolphQuotes[randomNum];
  document.querySelector("h3").style.padding = "70px 10px";
});
