var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

//cors
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSpecificOrigin",
        builder => builder.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod() //change to the correct port when you run client side
    );
});

var app = builder.Build();

app.UseCors("AllowSpecificOrigin");

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

var Msgs = new List<Message>();

app.MapGet("/messages", () =>
{
    return Msgs;
});

app.MapGet("/messages/{id}", (int id) =>
{
    return Msgs.SingleOrDefault(msg => id == msg.Id);
});

app.MapPost("/messages", (Message msg) =>
{
    Msgs.Add(msg);
});

app.MapDelete("/messages/{id}", (int id) =>
{
    Msgs.RemoveAll(msg => id == msg.Id);
    return TypedResults.NoContent();
});

app.Run();

public record Message(int Id, string Msg, int Sender, int Target);