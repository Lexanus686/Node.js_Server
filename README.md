# Node.js_Server

## Сервер, который принимает HTTP-запросы (GET, PUT, POST, PATCH), обрабатывает их и отдает ответ.

## Результаты работы

## 1. Get-request:
![Image alt](https://github.com/Lexanus686/Node.js_Server/blob/main/screenshots/GET-REQUEST-1.jpg)

## 2. Put-request
![Image alt](https://github.com/Lexanus686/Node.js_Server/blob/main/screenshots/PUT-REQUEST-2.jpg)

## 3. Post-request
![Image alt](https://github.com/Lexanus686/Node.js_Server/blob/main/screenshots/POST-REQUEST-3.jpg)

## 4. Put-request
![Image alt](https://github.com/Lexanus686/Node.js_Server/blob/main/screenshots/PUT-REQUEST-4.jpg)

## 5. Patch-request
![Image alt](https://github.com/Lexanus686/Node.js_Server/blob/main/screenshots/PATCH-REQUEST-5.jpg)

## 6. Post-request
![Image alt](https://github.com/Lexanus686/Node.js_Server/blob/main/screenshots/POST-REQUEST-6.jpg)

## 7.  Get-request
![Image alt](https://github.com/Lexanus686/Node.js_Server/blob/main/screenshots/GET-REQUEST-7.jpg)

## В табличном виде получаются следующие результаты:
| Номер запроса| Запрос        | Тело запроса           | Ответ  | Тело ответа |
| - | ------ | ---------------------- | ----- | ----- |
| 1 | GET       | | 200 Ok | null |
| 2 | PUT      | "{ "param1": "data1", "param2": "data2" }" | 400 Bad Request | Bad Request |
| 3 | POST     | "{ "param1": "data1", "param2": "data2" }" | 200 Ok | Ok |
| 4 | PUT       | "{ "param1": "data3", "param3": "data4" }" | 200 Ok | Ok |
| 5 | PATCH | "{"param1":"data2", "param2":"data3", "param3":\"data4"}" | 200 Ok | Ok |
| 6 | POST | "{\"param1\":\"data3\", \"param2\":\"data5\"}" | 400 Bad Request | Bad Request |
| 7 | GET | | 200 Ok | {"param1":"data2","param2":"data3","param3":"data4"} |
