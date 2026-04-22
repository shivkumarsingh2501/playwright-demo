const {test, expect , request}  = request ('@playwright/test');


let token;
test('API login', async() =>{




    const apiContext = await request.newContext();
    const response = await apiContext.post('../api/login' ,{
        data : {
            email : "test@test.com",
            password : "123456"
        }
    });
    const responseBody = await response.json();
    token = responseBody.token;
    console.log(token);

})

test('Inject token and open app', async ({page}) => {
    await page.addInitScript(value => {
        window.localStorage.setItem("token" , value);

    }, token);
});