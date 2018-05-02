

var hadith = ['The best amongst you is he who pays his debts in the most handsome manner.',
 				  'Avoid that which I forbid you to do and do that which I command you to do to the best of your capacity.',
 				   'All drinks that produce intoxication are Haram (forbidden to drink).',
 				   'The best Jihad is the word of Justice in front of the oppressive Sultan.',
 				   'The best words are the Words of Allah, and the best guidance is the guidance of Muhammad (SAW).',
 				   'Some people asked Allah’s Messenger (saw), “Whose Islam is the best? i.e. (Who is a very good Muslim)?” He replied, “One who avoids harming the Muslims with his tongue and hands.',
 				   'The best of you are those whose shoulders are soft in prayer.',
 				   'Between faith and unbelief is abandoning the prayer.',
 				   'A believer is not bitten twice from the same hole',
 				   'None of you will have true faith till he wishes for his (Muslim) brother what he likes for himself.']

 function showHadith(){
 		   
 	var hadithNum = Math.floor(Math.random()*(hadith.length));
 	document.getElementById('pr').innerHTML = hadith[hadithNum];
 	document.getElementById('pr').classList.add('prr');	
 		
}
 
 document.getElementById('btn').addEventListener("click",showHadith());
 document.getElementById('btn').addEventListener("click",showHadith);
 
