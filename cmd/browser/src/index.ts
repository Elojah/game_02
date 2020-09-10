import {grpc} from "@improbable-eng/grpc-web";
import {Auth} from "../../../cmd/auth/grpc/auth_pb_service";
import {Subscribe} from "../../../pkg/account/dto/account_pb";

function subscribe() {
  const sub = new Subscribe();
  sub.setAlias("test_grpcweb")
  sub.setEmail("test_grpcweb@test.gg")
  sub.setPassword("password")
  grpc.unary(Auth.Subscribe, {
    request: sub,
    host: "https://localhost:8080",
    onEnd: res => {
      const { status, statusMessage, headers, message, trailers } = res;
      console.log("subscribe.onEnd.status", status, statusMessage);
      console.log("subscribe.onEnd.headers", headers);
      if (status === grpc.Code.OK && message) {
        console.log("subscribe.onEnd.message", message.toObject());
      }
      console.log("subscribe.onEnd.trailers", trailers);
    //   queryBooks();
    }
  });
}

subscribe();

// function queryBooks() {
//   const queryBooksRequest = new QueryBooksRequest();
//   queryBooksRequest.setAuthorPrefix("Geor");
//   const client = grpc.client(BookService.QueryBooks, {
//     host: host,
//   });
//   client.onHeaders((headers: grpc.Metadata) => {
//     console.log("queryBooks.onHeaders", headers);
//   });
//   client.onMessage((message: Book) => {
//     console.log("queryBooks.onMessage", message.toObject());
//   });
//   client.onEnd((code: grpc.Code, msg: string, trailers: grpc.Metadata) => {
//     console.log("queryBooks.onEnd", code, msg, trailers);
//   });
//   client.start();
//   client.send(queryBooksRequest);
// }