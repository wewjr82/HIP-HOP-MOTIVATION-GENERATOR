let rapQuotes = [
  "Stay far from timid. Only make moves when your heart’s in it. And live the phrase ‘sky’s the limit — The Notorious B.I.G., “Sky’s the Limit",
  "You could be the king, but watch the queen conquer.” — Nicki Minaj, “Monster",
  "When I say or do something, I do it. I don’t give a damn what you think. I’m doing this for me.” — Eminem, “Not Afraid",
  "Live for today, plan for tomorrow, party tonight.” — Drake, “The Real Her",
  "It seems like blessings keep falling in my lap.” — Chance the Rapper, “Blessings",
  "Reach for the stars so if you fall you land on a cloud.” – Kanye West, Homecoming",
  "They see pictures, they say goals. I’m who they trying to be.” — Cardi B, “Bodak Yellow",
  "No matter how hard it gets stick your chest out, keep your head up and handle it.” — Tupac, “Me Against the World",
  "How you look so perfect on your worst days?” — A Boogie Wit Da Hoodie, “Swervin",
  "Fight for your rights, stand up, and be heard. You’re just as good as any man, believe that, word.” – Salt N Pepa, Ain’t Nuthing But A She Thang",
  "Damn right I like the life I live because I went from negative to positive.” – The Notorious B.I.G",
  "A goal is just a dream with a deadline.” – Drake",
  "I try to treat all the money I’m making like it’s the last time I’m going to make it.” – Eminem",
  "Love is not just a verb, it’s you looking in the mirror.” – Kendrick Lamar, Poetic Justice",
  "Every saint got a past; every sinner got a future. Every loser gotta win, and every winner gotta lose someday.” – J Cole, Deja Vu",
  "Be careful what you say to someone today. Because tomorrow they might not be here, and you can’t take it back.” – Wiz Khalifa",
  "When you see them be successful, however small, you say to yourself, wow. And everything becomes possible. Never denigrate, to say we will not succeed.” – Young Thug",
  "If it ain’t making me money, making me better, or making me happy… ain’t making time for it.” – 50 Cent",
  "I encourage everyone to pay attention to the issues that matter to you, from jobs and the economy to education and our schools, to criminal justice reform. Whatever it is that you care about, make sure you use your voice.”- 2 Chainz",
  "Even though you’re fed up, you got to keep ya head up.” – 2Pac, Keep Ya Head Up",
  "Without order, nothing exists. Without chaos, nothing evolves.” – Jedi Mind Tricks, Heavy Metal Kings",
  "Take a chance, because you never know how perfect something can turn out.” – J. Cole",
  "You’ve got to realize that the world’s a test, you can only do your best and let Him do the rest. You’ve got your life, and got your health, so quit procrastinating and push it yourself.” – Cee-Lo, In Due Time",
  "I’m my own competition, I’m competing with myself.” – Cardi B",
  "People will love you and support you when it’s beneficial.” – Nicki Minaj, Pills and Potions",
  "The purpose of life is a life with a purpose. So, I’d rather die for a cause, than live a life that is worthless.” – Immortal Technique",
  "It’s beauty in the struggle, ugliness in the success.” – J. Cole",
  "Never become so involved with something that it blinds you. Never forget where you are from; someone will remind you.” – DMX, It’s On",
  "Next time you see a brother down, stop and pick him up, cause you might be the next one stuck.” – Grand Puba, Mind Your Business",
  "The question isn’t do he loves ya the question is, do ya love yourself? You give the best advice to your friends and not take it for yourself.” – Big Sean, Jump Out the Window",
  "Can’t forget that I’m golden, can’t forget where I’m going.” – A$AP Rocky",
  "No matter where life takes me, find me with a smile.” – Mac Miller",
  "I go on and on. Can’t understand how I last so long.” – TOO $HORT",
  "Believe in your flyness, conquer your shyness.” – Kanye West",
  "My life’s all I got and Heaven is all in my brain, and when I feel I’m in Hell my ideas are what get me through pain.” – Hopsin",
  "I believe there’s a God above me, I’m just the god of everything else.” – Pusha T",
  "We ain’t picture perfect but we worth the picture still.” – J. Cole",
  "My biggest lesson is just, man: Whatever you do, own it. Know what you’re doing and know the consequences before you do it. If you’re fine with the consequences, it’s nothing nobody can tell you. Never do something because somebody else made you do it.” – Andre 3000",
];

let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let randomNum = Math.floor(Math.random() * rapQuotes.length);
  document.querySelector("h3").innerText = rapQuotes[randomNum];
  document.querySelector("h3").style.padding = "70px 10px";
});
