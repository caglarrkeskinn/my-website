const movieData = [
    {
      movie_name: "Fight Club",
      directors: "David Fincher",
      year: 1998,
      casts: [
        "Brad Pitt",
        "Edward Norton",
        "Meat Loaf",
        "Zach Grenier",
        "Richmond Arquette"
      ],
      image_url: [
        "https://media.newyorker.com/photos/5dbafcc91b4a6700085a7a9b/master/w_2240,c_limit/Baker-FightClub.jpg",
        "https://images.entertainment.ie/uploads/2019/10/19175737/Fight-Club-The-Final-Scene.png?w=1280&h=768&q=low",
        "https://www.syfy.com/sites/syfy/files/styles/hero_image__large__computer__alt_1_5x/public/2024/01/screen_shot_2024-01-08_at_11.12.14_am_0.jpg"
      ]
    },
    {
      movie_name: "The Shawshank Redemption",
      directors: "Frank Darabont",
      year: 1994,
      casts: [
        "Tim Robbins",
        "Morgan Freeman",
        "Bob Gunton",
        "William Sadler",
        "Clancy Brown"
      ],
      image_url: [
        "https://www.hollywoodreporter.com/wp-content/uploads/2018/03/the_shawshank_redemption_-_h_-_1994.jpg?w=1296&h=730&crop=1",
        "https://cdn.theasc.com/Shawshank-Featured.jpg",
        "https://sbiff.org/wp-content/uploads/shawshank-1080x675.jpg"
      ]
    },
    {
      movie_name: "Inception",
      directors: "Christopher Nolan",
      year: 2010,
      casts: [
        "Leonardo DiCaprio",
        "Joseph Gordon-Levitt",
        "Ellen Page",
        "Tom Hardy",
        "Ken Watanabe"
      ],
      image_url: [
        "https://m.media-amazon.com/images/M/MV5BMTUxMjI3Njk4OF5BMl5BanBnXkFtZTcwNzI2NjQ0Mw@@._V1_SX1500_CR0,0,1500,999_AL_.jpg",
        "https://miro.medium.com/v2/resize:fit:1400/0*HNFmQFI8bUjt4sIK",
        "https://reflectingoncinemablog.wordpress.com/wp-content/uploads/2017/06/inceptionnon-commercial1.jpg"
      ]
    },
    {
      movie_name: "The Godfather",
      directors: "Francis Ford Coppola",
      year: 1972,
      casts: [
        "Marlon Brando",
        "Al Pacino",
        "James Caan",
        "Richard S. Castellano",
        "Robert Duvall"
      ],
      image_url: [
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/11/The-Godfather-best-scene-restaurant-al-pacino.jpeg",
        "https://scrapsfromtheloft.com/wp-content/uploads/2019/12/The-Godfather-Opening-Scene.jpg",
        "https://bigpicturefilmclub.com/wp-content/uploads/2021/09/godfather_restaurant_scene_screen_shot.png"
      ]
    },
    {
      movie_name: "The Dark Knight",
      directors: "Christopher Nolan",
      year: 2008,
      casts: [
        "Christian Bale",
        "Heath Ledger",
        "Aaron Eckhart",
        "Michael Caine",
        "Maggie Gyllenhaal"
      ],
      image_url: [
        "https://i.ytimg.com/vi/xGcfBRkJSWQ/maxresdefault.jpg",
        "https://i0.wp.com/10thyearseniors.com/wp-content/uploads/2018/07/heaths_joker_300x128.jpg.0.jpg?fit=3650%2C1554&ssl=1",
        "https://cdn.mos.cms.futurecdn.net/RBF6E4GXEQwhZJFm8MGNGi.jpg"
      ]
    },
    {
      movie_name: "Pulp Fiction",
      directors: "Quentin Tarantino",
      year: 1994,
      casts: [
        "John Travolta",
        "Uma Thurman",
        "Samuel L. Jackson",
        "Bruce Willis",
        "Ving Rhames"
      ],
      image_url: [
        "https://s.studiobinder.com/wp-content/uploads/2020/08/Pulp-Fiction-Dance-Scene-What-Makes-this-Quentin-Tarantino-Scene-So-Great-scaled.jpghttps://m.media-amazon.com/images/I/51WwEmxHu7L._AC_.jpg",
        "hthttps://faroutmagazine.co.uk/static/uploads/1/2021/08/Samuel-L.-Jackson-and-John-Travolta-as-mob-hit-men-Jules-Winnfield-and-Vincent-Vega-in-Pulp-Fiction.jpgtps://example.com/another-image.jpg",
        "https://www.femalefirst.co.uk/image-library/land/1000/p/pulp-fiction-moustache.jpg"
      ]
    },
    {
      movie_name: "Schindler's List",
      directors: "Steven Spielberg",
      year: 1993,
      casts: [
        "Liam Neeson",
        "Ralph Fiennes",
        "Ben Kingsley",
        "Caroline Goodall",
        "Jonathan Sagall"
      ],
      image_url: [
        "https://justkillingti.me/wp-content/2015/05/article-2287890-186e920b000005dc-846_634x562.jpg",
        "https://static.timesofisrael.com/www/uploads/2013/03/Girl-in-red-e1374250305169.png",
        "https://images.ctfassets.net/jxsch4jish6b/photo-33541/523c282db03dfdfe1600e732f69cc9e3/33541-schindler-list.jpg"
      ]
    },
    {
      movie_name: "The Lord of the Rings: The Return of the King",
      directors: "Peter Jackson",
      year: 2003,
      casts: [
        "Elijah Wood",
        "Viggo Mortensen",
        "Ian McKellen",
        "Orlando Bloom",
        "Liv Tyler"
      ],
      image_url: [
        "https://variety.com/wp-content/uploads/2017/01/lord-of-the-rings-return-of-the-king.jpg",
        "https://m.media-amazon.com/images/M/MV5BMTc1NDIwMzg3NF5BMl5BanBnXkFtZTcwODE2MTk2Mw@@._V1_.jpg",
        "https://bookstr.com/wp-content/uploads/2022/12/return-of-the-king-LotR.jpg"
      ]
    },
    {
      movie_name: "Forrest Gump",
      directors: "Robert Zemeckis",
      year: 1994,
      casts: [
        "Tom Hanks",
        "Robin Wright",
        "Gary Sinise",
        "Sally Field",
        "Mykelti Williamson"
      ],
      image_url: [
        "https://dynaimage.cdn.cnn.com/cnn/c_fill,g_auto,w_1200,h_675,ar_16:9/https%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F220628122614-hanks-gump-bench.jpg",
        "https://www.capegazette.com/sites/capegazette/files/2019/10/field/image/Forrest-Gump-Forrest-Gump-Stops-Running-2-movieworldmap.com_-650x500%202.jpg",
        "https://i.ytimg.com/vi/Xl3gCFyx8F4/maxresdefault.jpg"
      ]
    },
    {
      movie_name: "The Matrix",
      directors: "Lana Wachowski; Lilly Wachowski",
      year: 1999,
      casts: [
        "Keanu Reeves",
        "Laurence Fishburne",
        "Carrie-Anne Moss",
        "Hugo Weaving",
        "Joe Pantoliano"
      ],
      image_url: [
        "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/09/matrix.jpg",
        "https://static1.cbrimages.com/wordpress/wp-content/uploads/2017/03/Trinity-and-Neo-from-The-Matrix.jpeg",
        "https://sleeplessthought.files.wordpress.com/2014/03/matrixdojo.jpg?w=684&h=297&crop=1"
      ]
    },
    {
      movie_name: "The Social Network",
      directors: "David Fincher",
      year: 2010,
      casts: [
        "Jesse Eisenberg",
        "Andrew Garfield",
        "Justin Timberlake",
        "Armie Hammer",
        "Max Minghella"
      ],
      image_url: [
        "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2022/08/The-Social-Network-2010--(1).jpg",
        "https://res.cloudinary.com/ybmedia/image/upload/c_crop,h_1123,w_2000,x_0,y_126/c_fill,f_auto,h_1215,q_auto,w_2160/v1/m/f/a/fa796e20d3b7ea147c9b71e0b1cf5956e252f44c/20-facts-might-know-social-network.jpg",
        "https://scriptmag.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY3Mzc4NTQzNDMyMzEyNDMy/the-social-network.jpg"
      ]
    },
    {
      movie_name: "Gladiator",
      directors: "Ridley Scott",
      year: 2000,
      casts: [
        "Russell Crowe",
        "Joaquin Phoenix",
        "Connie Nielsen",
        "Oliver Reed",
        "Richard Harris"
      ],
      image_url: [
        "https://hips.hearstapps.com/hmg-prod/images/russell-crowe-facing-off-against-tiger-in-a-scene-from-the-news-photo-1588683786.jpg",
        "https://scriptarsenal.com/cdn/shop/articles/unnamed_3b53a5bf-c7e7-42d2-b3bc-ca1b17286de3_1024x1024.jpg?v=1562787478",
        "https://lh5.googleusercontent.com/proxy/MutxBY1-SzBkTJMYStKZWg75BwfHvWM3Ss1MVJinnJJxYLUdbZ3mH__zgh8mZKTVr0Ig3dScIUqVfFwedVlTUXeAqIbWLOnfobQOoaGvMild_SupM7MLtLV1e3ys"
      ]
    },
    {
      movie_name: "Saving Private Ryan",
      directors: "Steven Spielberg",
      year: 1998,
      casts: [
        "Tom Hanks",
        "Matt Damon",
        "Tom Sizemore",
        "Edward Burns",
        "Barry Pepper"
      ],
      image_url: [
        "https://hips.hearstapps.com/hmg-prod/images/p0r75w-64b697fa6685f.jpg",
        "https://i.ytimg.com/vi/5f6bF3jyDz4/maxresdefault.jpg",
        "https://www.dga.org/-/media/Images/DGAQ-Article-Images/DGA-Quarterly/1103-Fall-2011/ShotToRemember03PrivateRyan.ashx?la=en&hash=B4FD739111A86F95DF37847B93AD008AD645E700"
      ]
    },
    {
      movie_name: "Interstellar",
      directors: "Christopher Nolan",
      year: 2014,
      casts: [
        "Matthew McConaughey",
        "Anne Hathaway",
        "Jessica Chastain",
        "Mackenzie Foy",
        "Michael Caine"
      ],
      image_url: [
        "https://eu-images.contentstack.com/v3/assets/blt949ea8e16e463049/blt21759244487bb02b/655e6183753a66040ac10b34/interstellar-matthew-mcconaughey.png",
        "https://cdn.openart.ai/stable_diffusion/2a8aa8781a7e986f463b6f0204b59822d4d69c1b_2000x2000.webp",
        "hhttps://images.rapgenius.com/985dd49ed403af33bf354e8d91ec0e10.1000x625x1.jpg"
      ]
    },
    {
      movie_name: "Whiplash",
      directors: "Damien Chazelle",
      year: 2014,
      casts: [
        "Miles Teller",
        "J.K. Simmons",
        "Paul Reiser",
        "Melissa Benoist",
        "Austin Stowell"
      ],
      image_url: [
        "https://pyxis.nymag.com/v1/imgs/657/ff7/9f18d6d03eb21545a5b2dbee0cbb1d798f-24-whiplashmain.2x.h473.w710.jpg",
        "https://www.hollywoodreporter.com/wp-content/uploads/2014/11/behind_the_screen_whiplash_still.jpg",
        "https://www.thestorydepartment.com/wp-content/uploads/2015/08/4869_whiplash-smaller.jpg"
      ]
    },
    {
      movie_name: "The Prestige",
      directors: "Christopher Nolan",
      year: 2006,
      casts: [
        "Christian Bale",
        "Hugh Jackman",
        "Scarlett Johansson",
        "Michael Caine",
        "Piper Perabo"
      ],
      image_url: [
        "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/01/The-Prestige-Twins-1-1.jpg",
        "https://cdn.theasc.com/_headerCarouselImage/The-Prestige-Featured.jpg",
        "https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/the-prestige-2007/The_Prestige.jpg"
      ]
    },
  
  
    {
        movie_name: "The Lion King",
        directors: "Roger Allers; Rob Minkoff",
        year: 1994,
        casts: [
          "Matthew Broderick",
          "Jeremy Irons",
          "James Earl Jones",
          "Whoopi Goldberg",
          "Jonathan Taylor Thomas"
        ],
        image_url: [
          "https://static01.nyt.com/images/2019/07/21/arts/21lionking-notebook1/21lionking-notebook1-superJumbo.jpg",
          "https://i.ytimg.com/vi/sQR1H9XKmzU/sddefault.jpg",
          "https://www.indiewire.com/wp-content/uploads/2016/10/the-lion-king.jpg"
        ]
      },
      {
        movie_name: "Memento",
        directors: "Christopher Nolan",
        year: 2000,
        casts: [
          "Guy Pearce",
          "Carrie-Anne Moss",
          "Joe Pantoliano",
          "Mark Boone Junior",
          "Russ Fega"
        ],
        image_url: [
          "https://www.indiewire.com/wp-content/uploads/2014/11/memento-christopher-nolan-t-ca0-superjumbo.jpg",
          "https://images.squarespace-cdn.com/content/v1/542227c8e4b01cc5399bd3df/1419905859128-V0R8CTLQNBEZ6GU6WSUI/image-asset.png",
          "https://themoviescreenscene.wordpress.com/wp-content/uploads/2018/04/aaa.png"
        ]
      },
      {
        movie_name: "The Great Gatsby",
        directors: "Baz Luhrmann",
        year: 2013,
        casts: [
          "Leonardo DiCaprio",
          "Tobey Maguire",
          "Carey Mulligan",
          "Joel Edgerton",
          "Elizabeth Debicki"
        ],
        image_url: [
          "https://www.hollywoodreporter.com/wp-content/uploads/2013/04/GG06892rc_a_l.jpg?w=1024",
          "https://media.gq.com/photos/558288601177d66d68d51b48/master/pass/blogs-the-feed-leo-gatsby.jpg",
          "https://images.fastcompany.com/image/upload/f_auto,c_fit,w_3840,q_auto/wp-cms/uploads/2013/07/1673095-poster-1280-greatgatsby2.jpg"
        ]
      },
      {
        movie_name: "Inglourious Basterds",
        directors: "Quentin Tarantino",
        year: 2009,
        casts: [
          "Brad Pitt",
          "Diane Kruger",
          "Eli Roth",
          "Mélanie Laurent",
          "Christoph Waltz"
        ],
        image_url: [
          "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/06/Inglourious-Basterds-ending.jpg",
          "https://preview.redd.it/bo91xtxstwe31.png?width=640&crop=smart&auto=webp&s=6e9fefcba3ca9c9b7e40bc11b9d205a361f185ba",
          "https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/11/Inglorious-Basterds-Tavern-Scene.jpeg"
        ]
      },
      {
        movie_name: "Titanic",
        directors: "James Cameron",
        year: 1997,
        casts: [
          "Leonardo DiCaprio",
          "Kate Winslet",
          "Billy Zane",
          "Kathy Bates",
          "Frances Fisher"
        ],
        image_url: [
          "https://assets.telegraphindia.com/telegraph/2022/Dec/1671443559_titanicscreenshot.jpg",
          "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/06/Leonardo-DiCaprio-as-Jack-and-Kate-Winslet-as-Rose-in-Titanic.jpg",
          "https://www.telegraph.co.uk/multimedia/archive/02182/titanic_2182886b.jpg"
        ]
      },
      {
        movie_name: "The Wolf of Wall Street",
        directors: "Martin Scorsese",
        year: 2013,
        casts: [
          "Leonardo DiCaprio",
          "Jonah Hill",
          "Margot Robbie",
          "Matthew McConaughey",
          "Kyle Chandler"
        ],
        image_url: [
          "https://www.hollywoodreporter.com/wp-content/uploads/2013/10/wolf.jpg?w=3000",
          "https://media.newyorker.com/photos/590951571c7a8e33fb38a2e8/master/pass/wallstreet-580.jpg",
          "https://i.insider.com/52bd1392ecad0455276949ed?width=1136&format=jpeg"
        ]
      },
      {
        movie_name: "A Beautiful Mind",
        directors: "Ron Howard",
        year: 2001,
        casts: [
          "Russell Crowe",
          "Ed Harris",
          "Jennifer Connelly",
          "Paul Bettany",
          "Adam Goldberg"
        ],
        image_url: [
          "https://www.pluggedin.com/wp-content/uploads/2019/12/a-beautiful-mind-1024x575.jpg",
          "https://thebarkbitesback.wordpress.com/wp-content/uploads/2014/07/screen-shot-2014-07-23-at-11-48-45-am.png",
          "https://www.usatoday.com/gcdn/-mm-/60160297822b0edacf9464c76a6288ba0b29febe/c=0-22-1876-1082/local/-/media/2015/05/24/USATODAY/USATODAY/635680691508700407-XXX-D0-HOR-GO-BEAUTIFUL-MIND-MOV.jpg?width=700&height=396&fit=crop&format=pjpg&auto=webp"
        ]
      },
      {
        movie_name: "The Silence of the Lambs",
        directors: "Jonathan Demme",
        year: 1991,
        casts: [
          "Jodie Foster",
          "Anthony Hopkins",
          "Lawrence A. Bonney",
          "Kasi Lemmons",
          "Lawrence T. Wrentz"
        ],
        image_url: [
          "https://cdn.mos.cms.futurecdn.net/y3bnuZwttTfjjXUK9HPYoW.jpg",
          "https://i0.wp.com/plotandtheme.com/wp-content/uploads/2016/05/silence-of-the-lambs.png?fit=1440%2C774&ssl=1",
          "https://media.gq.com/photos/58125c453c8d8f50046286c7/16:9/w_1280,c_limit/MV5BOTU2MWNjNjgtNTBlMS00N2Y1LWJlMTgtMzFiZmQyOTg5MWM1XkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_.jpg"
        ]
      },
      {
        movie_name: "La La Land",
        directors: "Damien Chazelle",
        year: 2016,
        casts: [
          "Ryan Gosling",
          "Emma Stone",
          "Rosemarie DeWitt",
          "J.K. Simmons",
          "Amiee Conn"
        ],
        image_url: [
          "https://static01.nyt.com/images/2016/09/19/arts/la-la-land-watching/19TORONTO-superJumbo.jpg",
          "https://ew.com/thmb/oUqjTHDzaSDwAhSmxnr8S0uQfvQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/la-la-land2-2000-cdc386889c1a42409110b5c45604429d.jpg",
          "https://people.com/thmb/aYAYib6g4_h1GnDSDcEdhuFootg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(599x0:601x2)/lala-land1-7a5237daa7bb47b5a0dfd64e5cf0d989.jpg"
        ]
      },
      {
        movie_name: "Se7en",
        directors: "David Fincher",
        year: 1995,
        casts: [
          "Brad Pitt",
          "Morgan Freeman",
          "Gwyneth Paltrow",
          "Kevin Spacey",
          "R. Lee Ermey"
        ],
        image_url: [
          "https://images.rapgenius.com/c1efb5d9bf010727387776ecbcf73db3.1000x428x1.jpg",
          "https://media.licdn.com/dms/image/D4D12AQHRe7QOdrkaKQ/article-cover_image-shrink_600_2000/0/1698667608493?e=2147483647&v=beta&t=9jXPaK-n2i6k-XZdSHroGNykCn1xnRs5Spzhc10YpXk",
          "https://lbhsnews.com/wp-content/uploads/2023/03/A941F3C4-B964-4B1F-90FA-07DB74FE3A0F.jpeg"
        ]
      },
      {
        movie_name: "Django Unchained",
        directors: "Quentin Tarantino",
        year: 2012,
        casts: [
          "Jamie Foxx",
          "Christoph Waltz",
          "Leonardo DiCaprio",
          "Kerry Washington",
          "Samuel L. Jackson"
        ],
        image_url: [
          "https://i.ytimg.com/vi/hglyRJXCNCM/maxresdefault.jpg",
          "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/06/Django-Unchained-ending-scene.jpg",
          "https://i.ytimg.com/vi/_O34Vf50sPQ/maxresdefault.jpg"
        ]
      },
      {
        movie_name: "The Shining",
        directors: "Stanley Kubrick",
        year: 1980,
        casts: [
          "Jack Nicholson",
          "Shelley Duvall",
          "Danny Lloyd",
          "Scatman Crothers",
          "Barry Nelson"
        ],
        image_url: [
          "https://i.guim.co.uk/img/static/sys-images/Film/Pix/pictures/2012/5/22/1337709078456/The-Shining-008.jpg?width=465&dpr=1&s=none",
          "https://consequence.net/wp-content/uploads/2020/05/the-shining-4.jpg",
          "https://i.insider.com/616dc12238c196001830697e?width=1200&format=jpeg"
        ]
      },
      {
        movie_name: "The Truman Show",
        directors: "Peter Weir",
        year: 1998,
        casts: [
          "Jim Carrey",
          "Ed Harris",
          "Laura Linney",
          "Noah Emmerich",
          "Natascha McElhone"
        ],
        image_url: [
          "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/01/an-image-of-truman-burbank-standing-with-his-arms-outstretched-in-the-truman-show.jpg",
          "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/09/Jim-Carrey-as-Truman-Burbank-in-The-Truman-Show.jpg",
          "https://images.bauerhosting.com/empire/2023/06/truman-show-3.jpg?auto=format&w=1440&q=80"
        ]
      },
      {
        movie_name: "The Departed",
        directors: "Martin Scorsese",
        year: 2006,
        casts: [
          "Leonardo DiCaprio",
          "Matt Damon",
          "Jack Nicholson",
          "Mark Wahlberg",
          "Martin Sheen"
        ],
        image_url: [
          "https://acmi-website-media-prod.s3.ap-southeast-2.amazonaws.com/media/images/The_Departed_-_The_Art_of_Making_a_B-Movie.original.jpg",
          "https://www.slashfilm.com/img/gallery/jack-nicholsons-improv-scared-leonardo-dicaprio-senseless-on-the-set-of-the-departed/l-intro-1663781262.jpg",
          "https://scenebygreen.com/wp-content/uploads/2022/09/screenshotter-thedeparted-stan-13915.jpg?w=1200"
        ]
      },
      {
        movie_name: "Slumdog Millionaire",
        directors: "Danny Boyle; Loveleen Tandan",
        year: 2008,
        casts: [
          "Dev Patel",
          "Freida Pinto",
          "Saurabh Shukla",
          "Anil Kapoor",
          "Irrfan Khan"
        ],
        image_url: [
          "https://i.guim.co.uk/img/static/sys-images/Film/Pix/pictures/2009/1/8/1231431471481/Scene-from-Slumdog-Millio-001.jpg?width=465&dpr=1&s=none",
          "https://www.nyfa.edu/wp-content/uploads/2022/11/800px-Jamal_Malik.jpg",
          "https://entertainment.time.com/wp-content/uploads/sites/3/2012/11/1500_slumdog-dance.jpg?w=720&h=480&crop=1"
        ]
      },
      {
        movie_name: "The Grand Budapest Hotel",
        directors: "Wes Anderson",
        year: 2014,
        casts: [
          "Ralph Fiennes",
          "F. Murray Abraham",
          "Mathieu Amalric",
          "Adrien Brody",
          "Willem Dafoe"
        ],
        image_url: [
          "https://www.filmmattersmagazine.com/wp-content/uploads/2022/04/Goodison-2.jpg",
          "https://i.ytimg.com/vi/FIlqIj0fuk0/maxresdefault.jpg",
          "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1439,w_2560,x_0,y_0/dpr_1.5/c_limit,w_1044/fl_lossy,q_auto/v1492201493/articles/2014/03/07/the-look-of-the-grand-budapest-hotel/140306-gbh-production-romano-tease_xpmocq"
        ]
      },
      {
        movie_name: "Blade Runner 2049",
        directors: "Denis Villeneuve",
        year: 2017,
        casts: [
          "Ryan Gosling",
          "Harrison Ford",
          "Ana de Armas",
          "Sylvia Hoeks",
          "Robin Wright"
        ],
        image_url: [
          "https://www.slashfilm.com/img/gallery/even-blade-runner-2049s-simplest-scenes-required-some-vfx-wizardry/l-intro-1655311705.jpg",
          "https://cdn.vox-cdn.com/thumbor/gWdMRx9L3m9s1QjH8maxxLHKaNM=/0x0:3414x2198/1200x800/filters:focal(1470x808:2016x1354)/cdn.vox-cdn.com/uploads/chorus_image/image/57219961/br_2049_1.0.jpg",
          "https://cdn2.hubspot.net/hubfs/6155957/Imported_Blog_Media/blade-runner-2049-image-ryan-gosling-ana-de-armas-1.jpg"
        ]
      },
      {
        movie_name: "The Revenant",
        directors: "Alejandro G. Iñárritu",
        year: 2015,
        casts: [
          "Leonardo DiCaprio",
          "Tom Hardy",
          "Will Poulter",
          "Domhnall Gleeson",
          "Paul Anderson"
        ],
        image_url: [
          "https://soc.org/wp-content/uploads/the-revenant-re_select_3-00001914_rgb.jpg",
          "https://ew.com/thmb/1iTVv9IgkfzpOegyJHdUpZy4WgA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/revenant-8d702631e0b84364842e2d28a1b8c128.jpg",
          "https://cdn.mos.cms.futurecdn.net/FcdaF9P8oei83cbyTuZJFG-1200-80.jpg"
        ]
      },
      {
        movie_name: "Gone Girl",
        directors: "David Fincher",
        year: 2014,
        casts: [
          "Ben Affleck",
          "Rosamund Pike",
          "Neil Patrick Harris",
          "Tyler Perry",
          "Carrie Coon"
        ],
        image_url: [
          "https://compote.slate.com/images/4ba7f0e1-9e27-45fc-8a93-f301a34aa747.jpg",
          "https://m.wsj.net/video/20140925/092514gonegirlclip/092514gonegirlclip_1280x720.jpg",
          "https://i.ytimg.com/vi/l9kaVhN9Rk4/maxresdefault.jpg"
        ]
      },
      {
        movie_name: "American Psycho",
        directors: "Mary Harron",
        year: 2000,
        casts: [
          "Christian Bale",
          "Justin Theroux",
          "Josh Lucas",
          "Bill Sage",
          "Chloë Sevigny"
        ],
        image_url: [
          "https://ew.com/thmb/WHGPHz8lr1OVfJzf1onY4emJ7Ew=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/American-Psycho-63c5a9406280425f96f7b7eff7efd105.jpg",
          "https://www.denofgeek.com/wp-content/uploads/2020/04/Christian-Bale-with-an-Axe-in-American-Psycho.jpg?fit=1300%2C755",
          "https://bigpicturefilmclub.com/wp-content/uploads/2021/11/American-Psycho.jpg"
        ]
      },
      {
        movie_name: "Her",
        directors: "Spike Jonze",
        year: 2013,
        casts: [
          "Joaquin Phoenix",
          "Amy Adams",
          "Scarlett Johansson",
          "Rooney Mara",
          "Chris Pratt"
        ],
        image_url: [
          "https://i0.wp.com/zamaninotesi.com/wp-content/uploads/2014/01/3022037-slide-her-film.jpg?ssl=1",
          "https://pyxis.nymag.com/v1/imgs/e93/e69/b1255ab6fa748ecb2296cc9867d15a61bf-26-her-1.2x.rsocial.w600.jpg",
          "https://blenderartists.org/uploads/default/original/4X/5/1/b/51baa21f418f824a82123e7444dfefbc1e14c04f.jpeg"
        ]
      },
      {
        movie_name: "A Clockwork Orange",
        directors: "Stanley Kubrick",
        year: 1971,
        casts: [
          "Malcolm McDowell",
          "Patrick Magee",
          "Michael Bates",
          "Warren Clarke",
          "John Clive"
        ],
        image_url: [
          "https://miro.medium.com/v2/resize:fit:2732/0*pgeSrz7B3KAyKrdK",
          "https://imgix.ranker.com/list_img_v2/11457/2811457/original/clockwork-orange-behind-the-scenes?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720",
          "https://www.indiewire.com/wp-content/uploads/2015/01/a-clockwork-orange.jpg?w=600&h=337&crop=1"
        ]
      },
      {
        movie_name: "Taxi Driver",
        directors: "Martin Scorsese",
        year: 1976,
        casts: [
          "Robert De Niro",
          "Jodie Foster",
          "Cybill Shepherd",
          "Albert Brooks",
          "Harvey Keitel"
        ],
        image_url: [
          "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/02/Travis-in-Taxi-Driver-3.jpg",
          "https://i.ytimg.com/vi/Ee0HbusYpuk/maxresdefault.jpg",
          "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/01/robert-de-niro-in-taxi-driver.jpg"
        ]
      },
      {
        movie_name: "The Big Lebowski",
        directors: "Joel Coen; Ethan Coen",
        year: 1998,
        casts: [
          "Jeff Bridges",
          "John Goodman",
          "Julianne Moore",
          "Steve Buscemi",
          "David Huddleston"
        ],
        image_url: [
          "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/04/The-Big-Lebowski-1.jpg",
          "https://mediaproxy.salon.com/width/1200/https://media2.salon.com/2012/12/the-big-lebowski-1.jpeg",
          "https://kcet.brightspotcdn.com/dims4/default/b755421/2147483647/strip/true/crop/630x419+0+0/resize/630x419!/quality/90/?url=http%3A%2F%2Fkcet-brightspot.s3.us-east-1.amazonaws.com%2Flegacy%2Fsites%2Fkl%2Ffiles%2Fatoms%2Farticle_atoms%2Fwww.kcet.org%2Fsocal%2Fdepartures%2Flandofsunshine%2Fassets_c%2F2013%2F03%2Fralphslebowski-thumb-630x419-47489.jpg"
        ]
      },
      {
        movie_name: "Mad Max: Fury Road",
        directors: "George Miller",
        year: 2015,
        casts: [
          "Tom Hardy",
          "Charlize Theron",
          "Nicholas Hoult",
          "Hugh Keays-Byrne",
          "Josh Helman"
        ],
        image_url: [
          "https://i.ytimg.com/vi/59b6mQmkBTA/maxresdefault.jpg",
          "https://i.ytimg.com/vi/hEJnMQG9ev8/maxresdefault.jpg",
          "https://www.fullsail.edu/assets/ext/about/about-fsStories-hero/grads-work-behind-the-scenes-on-the-post-apocalyptic-blockbuster-mad-max-fury-road-hero.jpg"
        ]
      },
      {
        movie_name: "The Martian",
        directors: "Ridley Scott",
        year: 2015,
        casts: [
          "Matt Damon",
          "Jessica Chastain",
          "Kristen Wiig",
          "Jeff Daniels",
          "Michael Peña"
        ],
        image_url: [
          "https://static01.nyt.com/images/2015/10/01/multimedia/martian-anatomy/martian-anatomy-superJumbo.jpg",
          "https://static01.nyt.com/images/2016/01/20/movies/martian-design2/martian-design2-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
          "https://ca-times.brightspotcdn.com/dims4/default/b96ca72/2147483647/strip/true/crop/2048x1077+0+0/resize/1200x631!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F74%2Fdc%2F30b181fc9a4ce8ca40c209aa7adc%2Fla-et-hc-the-martian-lord-of-the-rings-joke-20-001"
        ]
      },
      {
        movie_name: "The Imitation Game",
        directors: "Morten Tyldum",
        year: 2014,
        casts: [
          "Benedict Cumberbatch",
          "Keira Knightley",
          "Matthew Goode",
          "Rory Kinnear",
          "Allen Leech"
        ],
        image_url: [
          "https://www.indiewire.com/wp-content/uploads/2015/02/the-imitation-game-1.jpeg",
          "https://storygrid.com/wp-content/uploads/2020/07/708-Imitation-Game.png",
          "https://static01.nyt.com/images/2014/11/02/arts/imitation-anatomy-image/imitation-anatomy-image-superJumbo-v3.jpg"
        ]
      },
      {
        movie_name: "Life of Pi",
        directors: "Ang Lee",
        year: 2012,
        casts: [
          "Suraj Sharma",
          "Irrfan Khan",
          "Adil Hussain",
          "Tabu",
          "Rafe Spall"
        ],
        image_url: [
          "https://images.herzindagi.info/image/2022/Nov/life-of-pi-indise.jpg",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShzMTrFe7yb2KlbkEpnW4FItNlbQ6IrSy6bg&s",
          "https://media.wired.com/photos/59327fb6aef9a462de983444/master/pass/Life-of-Pi-Bioluminescent-Water.jpg"
        ]
      },
      {
        movie_name: "The Pursuit of Happyness",
        directors: "Gabriele Muccino",
        year: 2006,
        casts: [
          "Will Smith",
          "Thandie Newton",
          "Jaden Smith",
          "Brian Howe",
          "James Karen"
        ],
        image_url: [
          "https://cloudfront-us-east-1.images.arcpublishing.com/gray/A5W3LXMA7RGB7EEAKWXK4EKEQQ.jpg",
          "https://www.pluggedin.com/wp-content/uploads/2019/12/the-pursuit-of-happyness.jpg",
          "https://miro.medium.com/v2/resize:fit:1400/0*RNulNjD2VQ4F8vui.jpg"
        ]
      },
      {
        movie_name: "The Intouchables",
        directors: "Olivier Nakache; Éric Toledano",
        year: 2011,
        casts: [
          "François Cluzet",
          "Omar Sy",
          "Anne Le Ny",
          "Audrey Fleurot",
          "Clotilde Mollet"
        ],
        image_url: [
          "https://i.ytimg.com/vi/3XUNP4kyGAo/maxresdefault.jpg",
          "https://i.ytimg.com/vi/LJx1csOALac/maxresdefault.jpg",
          "https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/the-intouchables-2012/EB20120530REVIEWS120539995AR.jpg"
        ]
      },
      {
        movie_name: "Joker",
        directors: "Todd Phillips",
        year: 2019,
        casts: [
          "Joaquin Phoenix",
          "Robert De Niro",
          "Zazie Beetz",
          "Frances Conroy",
          "Brett Cullen"
        ],
        image_url: [
          "https://cdn.mos.cms.futurecdn.net/VBTsDswJ3MPxTyZ43ZNXkJ.jpg",
          "https://www.indiewire.com/wp-content/uploads/2019/10/rev-1-jok-04413_high_res_jpeg_wide-5751b93afee43388b0f06eefd209437871275f92-s800-c85.jpeg",
          "https://qph.cf2.quoracdn.net/main-qimg-e40faad9252b5d161ff5ed8b45acf48e-pjlq"
        ]
      },
      {
        movie_name: "Parasite",
        directors: "Bong Joon Ho",
        year: 2019,
        casts: [
          "Kang-ho Song",
          "Sun-kyun Lee",
          "Yeo-jeong Cho",
          "Woo-sik Choi",
          "So-dam Park"
        ],
        image_url: [
          "https://media.gq.com/photos/5dc05c36e0381b0008e7a877/16:9/w_2719,h_1529,c_limit/Parasite-Cannes-8.jpg",
          "https://contents.pep.ph/images2/images2/2020/04/05/pep-parasite-3-1586034830.jpg",
          "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/5169/images/2pCnLz04SAiYzgXIjbDB_parasite.jpg"
        ]
      }
  
];

export default movieData;
