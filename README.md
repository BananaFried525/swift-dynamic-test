
# API
install docker-compose up --build -d โดยจะ run ที่ port 8080
แบ่งออกเป็น 2 ส่วนคือ
function ในข้อ 2 
GET localhost:8080/function/max
GET localhost:8080/function/min
GET localhost:8080/function/average
GET localhost:8080/function/split/:page

approve ใบงานข้อ 3
POST localhost:8080/user/login

mockup user

 1. username: user1 , password: user1ABC
 2. username: user2 , password: user2ABC
 3. username: user3 , password: user3ABC


        body: {
    	    "userName":"user3",
    	    "password":"user3ABC",
    	    "repeatPassword":"user3ABC"
        }
        response: {
          data: {
			token: ${token}
	  	}
        }


POST localhost:8080/user/approve-report
ให้นำ token ที่ได้มาใส่ที่ header ดังนี้ authorization : Bearer ${token} ซึ่งต้อง login และ approve ทั้ง 3 user
