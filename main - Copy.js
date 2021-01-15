
const Discord = require("discord.js");
const client = new Discord.Client();

let prefix = "~";

client.login ("NzI4NjI0ODQxODcxMzI3MjUz.Xv9Gww.hWYa4WDH7RbZpqoa1L1n9UhPCKo")

console.log("I'm ready but I cant fucking do it")


client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;
  
  // If the message content starts with "!kick"
  if (message.content.startsWith('~kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply
            (`Successfully kicked ${user.tag}for${reason}`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to kick the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("You didn't mention the user to kick!");
    }
  }
});


 

client.on('message', message => {
	if (message.content === '~cat') {
    message.channel.send("https://cdn.discordapp.com/attachments/763367393849376800/763371527546470430/iu.png"
    
  

   
    
    );
  }

});



client.on('message', message => {
	if (message.content === '~cat') {
    message.channel.send("https://cdn.discordapp.com/attachments/763367393849376800/763371138013069322/iu.png"
    
  

   
    
    );
  }

});

client.on('message', message => {
	if (message.content === '~cat') {
    message.channel.send("https://cdn.discordapp.com/attachments/763367393849376800/763371151304294440/iu.png"
    
  

   
    
    );
  }

});

client.on('message', message => { 
	if (message.content === '~cat') {
    message.channel.send("https://cdn.discordapp.com/attachments/763367393849376800/763371125312192562/iu.png "
    
  

   
    
    );
  }

});


client.on('message', message => {
	if (message.content === '~hi') {
    message.channel.send("👋"
    
  

   
    
    );
  }

});

  
client.on('message', message => {
	if (message.content === '~dog') {
    message.channel.send("https://media.discordapp.net/attachments/770548420645093457/775642189446643732/th.png "
    
  

   
    
    );
  }

});


client.on('message', message => {
	if (message.content === '~dog') {
    message.channel.send("https://media.discordapp.net/attachments/770548420645093457/775642189446643732/th.png "
    
  

   
    
    );
  }

});


client.on('message', message => {
	if (message.content === '~dog') {
    message.channel.send("https://media.discordapp.net/attachments/770548420645093457/775642183201849395/1915_-_Copy.jpg?width=300&height=300 "
    
  

   
    
    );
  }

});


client.on('message', message => {
	if (message.content === '~dog') {
    message.channel.send("https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg "
    
  

   
    
    );
  }

});


client.on('message', message => {
	if (message.content === '~dog') {
    message.channel.send("https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg "
    
  

   
    
    );
  }

});









client.on('message', message => {
  if (message.content === prefix + 'ping') {
  message.channel.send('Loading data').then (async (msg) =>{
    msg.delete()
    message.channel.send(`Latency is ${msg.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  })
  }
});

client.on('message', message => {
	if (message.content === '~help') {
    message.channel.send({embed: {
      color: 962256,
      description: "<:wob:775658281166569472>   Heya my commands are ;hi , ;dog , ;ban ;kick , ;rules (spams channel be aware)and more to come oh one more thing. I'm running on discord.js v12"





      
    

    }});

   


     
    
  

   

  }

});
client.on('message', message => {
	if (message.content === '~uptime') {
    message.channel.send(`My uptime is ${client.uptime}`
    
  

   
    
    );
  }

});


client.on("message", message => {

  if (message.content.startsWith(prefix + "team")) {
      message.channel.send("You have been given `` role! !")
     
      const member = message.mentions.members.first();
      let Pheonix = message.guild.roles.find(role => role.id == "786999536475308072")
      member.addRole(Pheonix)
      
  }})


  if (message.content.toLowerCase().startsWith('~ban')) { // changed to case insensitive command
    const member = message.mentions.members.first(); // keep in mind it isn't the best practice to use message.mentions to retrieve an argument
    if (!member) return message.channel.send('no member mentioned');
    let reason = args.slice(2).join('Violating TOS/Server rules '); // arguments should already be defined
    member.ban(reason)
    .then(message.channel.send('success'))
    .catch(err => {
      message.channel.send('something went wrong');
      console.error();
    });
  }