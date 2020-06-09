---
title: API Reference

language_tabs:
- bash
- javascript

includes:

search: true

toc_footers:
- <a href='http://github.com/mpociot/documentarian'>Documentation Powered by Documentarian</a>
---
<!-- START_INFO -->
# Info

Welcome to the generated API reference.
[Get Postman Collection](http://localhost/docs/collection.json)

<!-- END_INFO -->

#general


<!-- START_a825b6bf7a19bb3e6f39dbbc99651aa6 -->
## Display a listing of the resource.

// * @return \Illuminate\Http\Response

> Example request:

```bash
curl -X GET \
    -G "http://localhost/api/vocab" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/vocab"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
[
    {
        "id": 1,
        "name": "House",
        "type": "noun",
        "extra": "countable",
        "meaning": "Nhà",
        "pronunciation": "\/haʊs\/",
        "description": "a building for people to live in, usually for one family",
        "example": "We need to build more houses in a way that respects the needs of the environment.",
        "created_at": "2020-05-23T09:14:48.000000Z",
        "updated_at": "2020-05-23T09:14:54.000000Z"
    },
    {
        "id": 2,
        "name": "University",
        "type": "noun",
        "extra": "countable",
        "meaning": "Trường Đại học",
        "pronunciation": "\/ˌjuːnɪˈvɜːsəti\/",
        "description": "​an institution at the highest level of education where you can study for a degree or do research",
        "example": "The site lies on the university campus next to the lake.",
        "created_at": "2020-05-23T09:16:29.000000Z",
        "updated_at": "2020-05-23T09:16:34.000000Z"
    },
    {
        "id": 3,
        "name": "Thunder",
        "type": "noun",
        "extra": "uncountable",
        "meaning": "Sấm sét",
        "pronunciation": "\/ˈθʌndə(r)\/",
        "description": "the loud noise that you hear after a flash of lightning, during a storm",
        "example": "The rumble of distant thunder",
        "created_at": "2020-05-26T19:12:25.000000Z",
        "updated_at": "2020-05-26T19:12:29.000000Z"
    },
    {
        "id": 4,
        "name": "Hobby",
        "type": "noun",
        "extra": "countable",
        "meaning": "Sở thích",
        "pronunciation": "\/ˈhɒbi\/",
        "description": "an activity that you do for pleasure when you are not working",
        "example": "Her hobbies include swimming and gardening",
        "created_at": "2020-05-31T10:35:14.000000Z",
        "updated_at": "2020-05-31T10:35:16.000000Z"
    },
    {
        "id": 5,
        "name": "lobby",
        "type": "verb",
        "extra": "countable",
        "meaning": "Sảnh đợi",
        "pronunciation": "\/ˈlɒbi\/",
        "description": "a large area inside the entrance of a public building where people can meet and wait",
        "example": "a hotel lobby",
        "created_at": "2020-05-31T10:46:37.000000Z",
        "updated_at": "2020-05-31T10:46:38.000000Z"
    },
    {
        "id": 6,
        "name": "Dictionary",
        "type": "noun",
        "extra": "countable",
        "meaning": "Từ điển",
        "pronunciation": "\/ˈdɪkʃənri\/",
        "description": "a book or electronic resource that gives a list of the words of a language in alphabetical order and explains what they mean, or gives a word for them in a foreign language",
        "example": "a dictionary of slang",
        "created_at": "2020-05-31T11:15:05.000000Z",
        "updated_at": "2020-05-31T11:15:06.000000Z"
    },
    {
        "id": 7,
        "name": "Rice",
        "type": "noun",
        "extra": "uncountable",
        "meaning": "Gạo",
        "pronunciation": "\/raɪs\/",
        "description": "short, narrow white or brown grain grown on wet land in hot countries as food; the plant that produces this grain",
        "example": "There is no need to keep the rice field flooded",
        "created_at": "2020-05-31T11:20:55.000000Z",
        "updated_at": "2020-05-31T11:20:55.000000Z"
    },
    {
        "id": 8,
        "name": "Water",
        "type": "noun",
        "extra": "uncountable",
        "meaning": "Nước",
        "pronunciation": "\/ˈwɔːtə(r)\/",
        "description": "a liquid without colour, smell or taste that falls as rain, is in lakes, rivers and seas, and is used for drinking, washing, etc. Water is the name given to the chemical compound of oxygen and hydrogen with the chemical symbol H₂O",
        "example": "a glass of water",
        "created_at": "2020-05-31T11:23:47.000000Z",
        "updated_at": "2020-05-31T11:23:48.000000Z"
    },
    {
        "id": 9,
        "name": "fight",
        "type": "verb",
        "extra": "N\/A",
        "meaning": "chiến đấu",
        "pronunciation": "\/faɪt\/",
        "description": "to take part in a war or battle against an enemy",
        "example": "Didn't we fight a war for freedom?",
        "created_at": "2020-05-31T11:28:02.000000Z",
        "updated_at": "2020-05-31T11:28:09.000000Z"
    },
    {
        "id": 10,
        "name": "cool",
        "type": "adjective",
        "extra": "N\/A",
        "meaning": "mát",
        "pronunciation": "\/kuːl\/",
        "description": "fairly cold; not hot or warm",
        "example": "Cooler weather is forecast for the weekend",
        "created_at": "2020-05-31T20:00:33.000000Z",
        "updated_at": "2020-05-31T20:00:34.000000Z"
    },
    {
        "id": 11,
        "name": "hot",
        "type": "adjective",
        "extra": "N\/A",
        "meaning": "nóng",
        "pronunciation": "\/hɒt\/",
        "description": "having a high temperature; producing heat",
        "example": "It's hot today, isn't it?",
        "created_at": "2020-05-31T20:01:50.000000Z",
        "updated_at": "2020-05-31T20:01:51.000000Z"
    },
    {
        "id": 12,
        "name": "Sandwich",
        "type": "noun",
        "extra": "countable",
        "meaning": "bánh mỳ lát\/kẹp",
        "pronunciation": "\/ˈsænwɪtʃ\/",
        "description": "two slices of bread, often spread with butter, with a layer of meat, cheese, etc. between them",
        "example": "We ate turkey sandwiches and wild blueberries",
        "created_at": "2020-05-31T20:03:50.000000Z",
        "updated_at": "2020-05-31T20:03:49.000000Z"
    },
    {
        "id": 13,
        "name": "Crane",
        "type": "noun",
        "extra": "countable",
        "meaning": "cần cẩu",
        "pronunciation": "\/kreɪn\/",
        "description": "​a tall machine with a long arm, used to lift and move building materials and other heavy objects",
        "example": "The yellow crane next to that tall under construction building",
        "created_at": "2020-05-31T20:05:34.000000Z",
        "updated_at": "2020-05-31T20:05:35.000000Z"
    },
    {
        "id": 14,
        "name": "Satellite",
        "type": "noun",
        "extra": "countable",
        "meaning": "vệ tinh",
        "pronunciation": "\/ˈsætəlaɪt\/",
        "description": "an electronic device that is sent into space and moves around the earth or another planet. It is used for communicating by radio, television, etc. and for gathering information.",
        "example": "My car was fitted with a satellite navigation system",
        "created_at": "2020-05-31T20:06:55.000000Z",
        "updated_at": "2020-05-31T20:07:01.000000Z"
    },
    {
        "id": 15,
        "name": "Plant",
        "type": "noun",
        "extra": "countable",
        "meaning": "cây cỏ",
        "pronunciation": "\/plɑːnt\/",
        "description": "a living thing that grows in the earth and usually has a stem, leaves and roots, especially one that is smaller than a tree or bush",
        "example": "All plants need light and water",
        "created_at": "2020-05-31T20:07:51.000000Z",
        "updated_at": "2020-05-31T20:07:53.000000Z"
    },
    {
        "id": 16,
        "name": "Rain",
        "type": "noun",
        "extra": "uncountable",
        "meaning": "mưa",
        "pronunciation": "\/reɪn\/",
        "description": "water that falls from the sky in separate drops",
        "example": "Typically, we get nearly 5 inches of rain in June",
        "created_at": "2020-05-31T20:09:03.000000Z",
        "updated_at": "2020-05-31T20:09:07.000000Z"
    },
    {
        "id": 17,
        "name": "fast",
        "type": "adjective",
        "extra": "N\/A",
        "meaning": "nhanh chóng",
        "pronunciation": "\/fɑːst\/",
        "description": "moving or able to move quickly",
        "example": "He's just become the world's fastest runner",
        "created_at": "2020-05-31T20:10:13.000000Z",
        "updated_at": "2020-05-31T20:10:17.000000Z"
    },
    {
        "id": 18,
        "name": "throw",
        "type": "verb",
        "extra": "N\/A",
        "meaning": "ném",
        "pronunciation": "\/θrəʊ\/",
        "description": "to send something from your hand through the air by moving your hand or arm quickly",
        "example": "He threw the ball into the bushes and the dog ran to fetch it",
        "created_at": "2020-05-31T20:11:32.000000Z",
        "updated_at": "2020-05-31T20:11:34.000000Z"
    },
    {
        "id": 19,
        "name": "Route",
        "type": "noun",
        "extra": "countable",
        "meaning": "tuyến đường",
        "pronunciation": "\/ruːt\/",
        "description": "a way that you follow to get from one place to another",
        "example": "The alley would take them on a more direct route to the Old Town",
        "created_at": "2020-05-31T20:13:13.000000Z",
        "updated_at": "2020-05-31T20:13:15.000000Z"
    },
    {
        "id": 20,
        "name": "Ship",
        "type": "noun",
        "extra": "countable",
        "meaning": "tàu",
        "pronunciation": "\/ʃɪp\/",
        "description": "a large boat that carries people or goods by sea",
        "example": "They boarded a ship bound for India",
        "created_at": "2020-05-31T20:14:28.000000Z",
        "updated_at": "2020-05-31T20:14:31.000000Z"
    }
]
```

### HTTP Request
`GET api/vocab`


<!-- END_a825b6bf7a19bb3e6f39dbbc99651aa6 -->

<!-- START_aa7517c0a4ef020f2300d2b7e65dc3e3 -->
## Show the form for creating a new resource.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/api/vocab/create" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/vocab/create"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`GET api/vocab/create`


<!-- END_aa7517c0a4ef020f2300d2b7e65dc3e3 -->

<!-- START_bef0a267620632a9ce277ccd7bc043cf -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/vocab" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/vocab"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/vocab`


<!-- END_bef0a267620632a9ce277ccd7bc043cf -->

<!-- START_a7dc7faadb06245da1000bff69436e31 -->
## Display the specified resource.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/api/vocab/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/vocab/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`GET api/vocab/{vocab}`


<!-- END_a7dc7faadb06245da1000bff69436e31 -->

<!-- START_af6bf007aece2cd9c3d85eb34716d33a -->
## Show the form for editing the specified resource.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/api/vocab/1/edit" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/vocab/1/edit"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`GET api/vocab/{vocab}/edit`


<!-- END_af6bf007aece2cd9c3d85eb34716d33a -->

<!-- START_03718acee7ffe93f1da24700526a611e -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X PUT \
    "http://localhost/api/vocab/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/vocab/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/vocab/{vocab}`

`PATCH api/vocab/{vocab}`


<!-- END_03718acee7ffe93f1da24700526a611e -->

<!-- START_5f55c6b75257aeafcb3a463d5f9d918f -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X DELETE \
    "http://localhost/api/vocab/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/vocab/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE api/vocab/{vocab}`


<!-- END_5f55c6b75257aeafcb3a463d5f9d918f -->

<!-- START_a1f4956f5c46954de50063de92e965c6 -->
## Display a listing of the resource.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/api/set" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/set"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (500):

```json
{
    "message": "Server Error"
}
```

### HTTP Request
`GET api/set`


<!-- END_a1f4956f5c46954de50063de92e965c6 -->

<!-- START_7e5fea88187aa5524320bb5859df30e6 -->
## Show the form for creating a new resource.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/api/set/create" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/set/create"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`GET api/set/create`


<!-- END_7e5fea88187aa5524320bb5859df30e6 -->

<!-- START_bf750769cdc00aec3a63b16c23e00c40 -->
## Store a newly created resource in storage.

> Example request:

```bash
curl -X POST \
    "http://localhost/api/set" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/set"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST api/set`


<!-- END_bf750769cdc00aec3a63b16c23e00c40 -->

<!-- START_9eb303fc3a03bb155e58dc150223ccd5 -->
## Display the specified resource.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/api/set/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/set/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`GET api/set/{set}`


<!-- END_9eb303fc3a03bb155e58dc150223ccd5 -->

<!-- START_67942dfd685477b0c040aa65e257f836 -->
## Show the form for editing the specified resource.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/api/set/1/edit" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/set/1/edit"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`GET api/set/{set}/edit`


<!-- END_67942dfd685477b0c040aa65e257f836 -->

<!-- START_49ba3f9b05443d91b210a51a2faa0823 -->
## Update the specified resource in storage.

> Example request:

```bash
curl -X PUT \
    "http://localhost/api/set/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/set/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/set/{set}`

`PATCH api/set/{set}`


<!-- END_49ba3f9b05443d91b210a51a2faa0823 -->

<!-- START_7fcfabcac770220271f02d35dae45852 -->
## Remove the specified resource from storage.

> Example request:

```bash
curl -X DELETE \
    "http://localhost/api/set/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/set/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "DELETE",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`DELETE api/set/{set}`


<!-- END_7fcfabcac770220271f02d35dae45852 -->

<!-- START_76c8ce215e681515696f62f9c115fb88 -->
## Display the specified resource.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/api/vocab/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/vocab/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`GET api/vocab/{id}`


<!-- END_76c8ce215e681515696f62f9c115fb88 -->

<!-- START_17b980b12d68db732e8fbc88039addd5 -->
## Show the form for creating a new resource.

> Example request:

```bash
curl -X PUT \
    "http://localhost/api/vocab/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/api/vocab/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "PUT",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`PUT api/vocab/{name}`


<!-- END_17b980b12d68db732e8fbc88039addd5 -->

<!-- START_66e08d3cc8222573018fed49e121e96d -->
## Show the application&#039;s login form.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/login" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/login"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET login`


<!-- END_66e08d3cc8222573018fed49e121e96d -->

<!-- START_ba35aa39474cb98cfb31829e70eb8b74 -->
## Handle a login request to the application.

> Example request:

```bash
curl -X POST \
    "http://localhost/login" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/login"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST login`


<!-- END_ba35aa39474cb98cfb31829e70eb8b74 -->

<!-- START_e65925f23b9bc6b93d9356895f29f80c -->
## Log the user out of the application.

> Example request:

```bash
curl -X POST \
    "http://localhost/logout" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/logout"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST logout`


<!-- END_e65925f23b9bc6b93d9356895f29f80c -->

<!-- START_ff38dfb1bd1bb7e1aa24b4e1792a9768 -->
## Show the application registration form.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/register" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/register"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET register`


<!-- END_ff38dfb1bd1bb7e1aa24b4e1792a9768 -->

<!-- START_d7aad7b5ac127700500280d511a3db01 -->
## Handle a registration request for the application.

> Example request:

```bash
curl -X POST \
    "http://localhost/register" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/register"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST register`


<!-- END_d7aad7b5ac127700500280d511a3db01 -->

<!-- START_d72797bae6d0b1f3a341ebb1f8900441 -->
## Display the form to request a password reset link.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/password/reset" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/password/reset"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET password/reset`


<!-- END_d72797bae6d0b1f3a341ebb1f8900441 -->

<!-- START_feb40f06a93c80d742181b6ffb6b734e -->
## Send a reset link to the given user.

> Example request:

```bash
curl -X POST \
    "http://localhost/password/email" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/password/email"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST password/email`


<!-- END_feb40f06a93c80d742181b6ffb6b734e -->

<!-- START_e1605a6e5ceee9d1aeb7729216635fd7 -->
## Display the password reset view for the given token.

If no token is present, display the link request form.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/password/reset/1" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/password/reset/1"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET password/reset/{token}`


<!-- END_e1605a6e5ceee9d1aeb7729216635fd7 -->

<!-- START_cafb407b7a846b31491f97719bb15aef -->
## Reset the given user&#039;s password.

> Example request:

```bash
curl -X POST \
    "http://localhost/password/reset" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/password/reset"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST password/reset`


<!-- END_cafb407b7a846b31491f97719bb15aef -->

<!-- START_b77aedc454e9471a35dcb175278ec997 -->
## Display the password confirmation view.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/password/confirm" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/password/confirm"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET password/confirm`


<!-- END_b77aedc454e9471a35dcb175278ec997 -->

<!-- START_54462d3613f2262e741142161c0e6fea -->
## Confirm the given user&#039;s password.

> Example request:

```bash
curl -X POST \
    "http://localhost/password/confirm" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/password/confirm"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "POST",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```



### HTTP Request
`POST password/confirm`


<!-- END_54462d3613f2262e741142161c0e6fea -->

<!-- START_cb859c8e84c35d7133b6a6c8eac253f8 -->
## Show the application dashboard.

> Example request:

```bash
curl -X GET \
    -G "http://localhost/home" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/home"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (401):

```json
{
    "message": "Unauthenticated."
}
```

### HTTP Request
`GET home`


<!-- END_cb859c8e84c35d7133b6a6c8eac253f8 -->

<!-- START_53be1e9e10a08458929a2e0ea70ddb86 -->
## /
> Example request:

```bash
curl -X GET \
    -G "http://localhost/" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET /`


<!-- END_53be1e9e10a08458929a2e0ea70ddb86 -->

<!-- START_f453d442cbe270ed50c2def3a3416115 -->
## about
> Example request:

```bash
curl -X GET \
    -G "http://localhost/about" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/about"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (200):

```json
null
```

### HTTP Request
`GET about`


<!-- END_f453d442cbe270ed50c2def3a3416115 -->

<!-- START_679ea4e19d49028fd5a7bd6ee9f0f308 -->
## contact
> Example request:

```bash
curl -X GET \
    -G "http://localhost/contact" \
    -H "Content-Type: application/json" \
    -H "Accept: application/json"
```

```javascript
const url = new URL(
    "http://localhost/contact"
);

let headers = {
    "Content-Type": "application/json",
    "Accept": "application/json",
};

fetch(url, {
    method: "GET",
    headers: headers,
})
    .then(response => response.json())
    .then(json => console.log(json));
```


> Example response (500):

```json
{
    "message": "Server Error"
}
```

### HTTP Request
`GET contact`


<!-- END_679ea4e19d49028fd5a7bd6ee9f0f308 -->


