// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: github.com/elojah/game_02/cmd/auth/grpc/auth.proto

package grpc

import (
	context "context"
	fmt "fmt"
	dto "github.com/elojah/game_02/pkg/account/dto"
	lobby "github.com/elojah/game_02/pkg/lobby"
	player "github.com/elojah/game_02/pkg/player"
	room "github.com/elojah/game_02/pkg/room"
	dto1 "github.com/elojah/game_02/pkg/room/dto"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	types "github.com/gogo/protobuf/types"
	golang_proto "github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = golang_proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

func init() {
	proto.RegisterFile("github.com/elojah/game_02/cmd/auth/grpc/auth.proto", fileDescriptor_8d96c525a8957fde)
}
func init() {
	golang_proto.RegisterFile("github.com/elojah/game_02/cmd/auth/grpc/auth.proto", fileDescriptor_8d96c525a8957fde)
}

var fileDescriptor_8d96c525a8957fde = []byte{
	// 422 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x91, 0xbf, 0x6e, 0xd4, 0x40,
	0x10, 0xc6, 0xbd, 0x28, 0x4a, 0xb8, 0xbd, 0x08, 0xa1, 0x2d, 0x28, 0x8c, 0x34, 0x12, 0x08, 0x51,
	0x91, 0xdd, 0x70, 0x29, 0x52, 0x43, 0xa0, 0xbb, 0x22, 0x4a, 0xa0, 0x46, 0x5e, 0xdf, 0xb2, 0x36,
	0xb1, 0x3d, 0x96, 0xbd, 0x2e, 0xae, 0xe3, 0x11, 0x78, 0x0c, 0x1e, 0x81, 0x32, 0x25, 0xe5, 0x95,
	0x69, 0x90, 0xf0, 0xba, 0xa1, 0xbc, 0x92, 0x12, 0x79, 0xd7, 0xf7, 0x87, 0xe2, 0x4e, 0x69, 0xd6,
	0x3b, 0xdf, 0x7e, 0xbf, 0x99, 0xf1, 0x0c, 0x9d, 0xe8, 0xd4, 0x24, 0x8d, 0xe4, 0x31, 0xe6, 0x42,
	0x65, 0xf8, 0x25, 0x4a, 0x84, 0x8e, 0x72, 0xf5, 0xe9, 0x74, 0x22, 0xe2, 0x7c, 0x26, 0xa2, 0xc6,
	0x24, 0x42, 0x57, 0x65, 0xec, 0x6e, 0xbc, 0xac, 0xd0, 0x20, 0x3b, 0xe8, 0x85, 0xf0, 0x64, 0x8b,
	0xd4, 0xa8, 0x51, 0xb8, 0x47, 0xd9, 0x7c, 0x76, 0x91, 0x0b, 0xdc, 0xcd, 0x43, 0xe1, 0x53, 0x8d,
	0xa8, 0x33, 0xb5, 0x71, 0xa9, 0xbc, 0x34, 0xf3, 0xe1, 0x51, 0xec, 0xee, 0xa2, 0xbc, 0xd1, 0x22,
	0x43, 0x29, 0xe7, 0xfe, 0x1c, 0x80, 0xd7, 0xfb, 0x81, 0x32, 0x8b, 0xe6, 0xaa, 0x1a, 0x3e, 0x03,
	0x72, 0xb2, 0x1f, 0xa9, 0x10, 0x73, 0x77, 0x0c, 0xf6, 0xf3, 0xfd, 0xf6, 0x28, 0x8e, 0xb1, 0x29,
	0x8c, 0x98, 0x19, 0x5c, 0xdd, 0xef, 0xd7, 0x9a, 0xab, 0xd3, 0x53, 0x9b, 0x5a, 0x93, 0x5f, 0x0f,
	0xe8, 0xc1, 0x9b, 0xc6, 0x24, 0xec, 0x8c, 0x8e, 0xae, 0x1b, 0x59, 0xc7, 0x55, 0x2a, 0x15, 0x7b,
	0xc4, 0x67, 0x06, 0xf9, 0x3a, 0x0e, 0x9f, 0x70, 0x3f, 0x42, 0xbe, 0x1a, 0x21, 0x7f, 0xdf, 0x8f,
	0x90, 0x9d, 0xd3, 0xf1, 0xc7, 0xa2, 0x5e, 0x63, 0x8f, 0x1d, 0xb6, 0xa5, 0xec, 0x04, 0x9f, 0xd1,
	0xc3, 0xeb, 0x54, 0x17, 0x69, 0xc1, 0xc6, 0xbe, 0x94, 0x0b, 0x42, 0xea, 0x82, 0x0f, 0x78, 0xa3,
	0x0a, 0xf6, 0x8a, 0x1e, 0xf5, 0x2a, 0x36, 0x86, 0x8d, 0x9c, 0xdc, 0xb7, 0xb9, 0x33, 0xe1, 0x0b,
	0x3a, 0x9e, 0xa6, 0xb5, 0x99, 0xa2, 0x94, 0xa9, 0xaa, 0xb7, 0x89, 0x87, 0xdc, 0x6f, 0x6f, 0x7a,
	0x4a, 0xd8, 0x73, 0x4a, 0x2f, 0x2a, 0x15, 0x19, 0x75, 0x85, 0x98, 0x0f, 0xa5, 0xbd, 0x10, 0x1e,
	0x71, 0x37, 0x95, 0xab, 0x3e, 0xd3, 0x05, 0x16, 0x85, 0x8a, 0x8d, 0x33, 0x1d, 0x7b, 0x93, 0x57,
	0x36, 0xae, 0x97, 0xf4, 0xd8, 0x83, 0x97, 0x6e, 0xd1, 0xff, 0xe7, 0x1a, 0xf1, 0x61, 0xfd, 0x97,
	0x6f, 0xdf, 0x2d, 0x5a, 0x08, 0xee, 0x5a, 0x08, 0x96, 0x2d, 0x90, 0xbf, 0x2d, 0x90, 0xaf, 0x16,
	0xc8, 0x77, 0x0b, 0xe4, 0x87, 0x05, 0x72, 0x6b, 0x81, 0xfc, 0xb4, 0x40, 0x16, 0x16, 0xc8, 0x6f,
	0x0b, 0xe4, 0x8f, 0x85, 0x60, 0x69, 0x81, 0x7c, 0xeb, 0x20, 0xb8, 0xed, 0x80, 0x2c, 0x3a, 0x08,
	0xee, 0x3a, 0x08, 0xe4, 0xa1, 0xfb, 0xdb, 0xb3, 0x7f, 0x01, 0x00, 0x00, 0xff, 0xff, 0x46, 0xcd,
	0x5d, 0xbe, 0x33, 0x03, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// AuthClient is the client API for Auth service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type AuthClient interface {
	Subscribe(ctx context.Context, in *dto.Subscribe, opts ...grpc.CallOption) (*types.Empty, error)
	Unsubscribe(ctx context.Context, in *dto.Unsubscribe, opts ...grpc.CallOption) (*types.Empty, error)
	Signin(ctx context.Context, in *dto.Signin, opts ...grpc.CallOption) (*dto.Token, error)
	Signout(ctx context.Context, in *dto.Auth, opts ...grpc.CallOption) (*types.Empty, error)
	ListLobbies(ctx context.Context, in *dto.Auth, opts ...grpc.CallOption) (Auth_ListLobbiesClient, error)
	CreateRoom(ctx context.Context, in *dto1.Create, opts ...grpc.CallOption) (*room.R, error)
	ConnectRoom(ctx context.Context, in *dto1.Connect, opts ...grpc.CallOption) (*room.R, error)
	CreatePlayer(ctx context.Context, in *dto1.Create, opts ...grpc.CallOption) (*player.P, error)
}

type authClient struct {
	cc *grpc.ClientConn
}

func NewAuthClient(cc *grpc.ClientConn) AuthClient {
	return &authClient{cc}
}

func (c *authClient) Subscribe(ctx context.Context, in *dto.Subscribe, opts ...grpc.CallOption) (*types.Empty, error) {
	out := new(types.Empty)
	err := c.cc.Invoke(ctx, "/grpc.Auth/Subscribe", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authClient) Unsubscribe(ctx context.Context, in *dto.Unsubscribe, opts ...grpc.CallOption) (*types.Empty, error) {
	out := new(types.Empty)
	err := c.cc.Invoke(ctx, "/grpc.Auth/Unsubscribe", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authClient) Signin(ctx context.Context, in *dto.Signin, opts ...grpc.CallOption) (*dto.Token, error) {
	out := new(dto.Token)
	err := c.cc.Invoke(ctx, "/grpc.Auth/Signin", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authClient) Signout(ctx context.Context, in *dto.Auth, opts ...grpc.CallOption) (*types.Empty, error) {
	out := new(types.Empty)
	err := c.cc.Invoke(ctx, "/grpc.Auth/Signout", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authClient) ListLobbies(ctx context.Context, in *dto.Auth, opts ...grpc.CallOption) (Auth_ListLobbiesClient, error) {
	stream, err := c.cc.NewStream(ctx, &_Auth_serviceDesc.Streams[0], "/grpc.Auth/ListLobbies", opts...)
	if err != nil {
		return nil, err
	}
	x := &authListLobbiesClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type Auth_ListLobbiesClient interface {
	Recv() (*lobby.L, error)
	grpc.ClientStream
}

type authListLobbiesClient struct {
	grpc.ClientStream
}

func (x *authListLobbiesClient) Recv() (*lobby.L, error) {
	m := new(lobby.L)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *authClient) CreateRoom(ctx context.Context, in *dto1.Create, opts ...grpc.CallOption) (*room.R, error) {
	out := new(room.R)
	err := c.cc.Invoke(ctx, "/grpc.Auth/CreateRoom", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authClient) ConnectRoom(ctx context.Context, in *dto1.Connect, opts ...grpc.CallOption) (*room.R, error) {
	out := new(room.R)
	err := c.cc.Invoke(ctx, "/grpc.Auth/ConnectRoom", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authClient) CreatePlayer(ctx context.Context, in *dto1.Create, opts ...grpc.CallOption) (*player.P, error) {
	out := new(player.P)
	err := c.cc.Invoke(ctx, "/grpc.Auth/CreatePlayer", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AuthServer is the server API for Auth service.
type AuthServer interface {
	Subscribe(context.Context, *dto.Subscribe) (*types.Empty, error)
	Unsubscribe(context.Context, *dto.Unsubscribe) (*types.Empty, error)
	Signin(context.Context, *dto.Signin) (*dto.Token, error)
	Signout(context.Context, *dto.Auth) (*types.Empty, error)
	ListLobbies(*dto.Auth, Auth_ListLobbiesServer) error
	CreateRoom(context.Context, *dto1.Create) (*room.R, error)
	ConnectRoom(context.Context, *dto1.Connect) (*room.R, error)
	CreatePlayer(context.Context, *dto1.Create) (*player.P, error)
}

// UnimplementedAuthServer can be embedded to have forward compatible implementations.
type UnimplementedAuthServer struct {
}

func (*UnimplementedAuthServer) Subscribe(ctx context.Context, req *dto.Subscribe) (*types.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Subscribe not implemented")
}
func (*UnimplementedAuthServer) Unsubscribe(ctx context.Context, req *dto.Unsubscribe) (*types.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Unsubscribe not implemented")
}
func (*UnimplementedAuthServer) Signin(ctx context.Context, req *dto.Signin) (*dto.Token, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Signin not implemented")
}
func (*UnimplementedAuthServer) Signout(ctx context.Context, req *dto.Auth) (*types.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Signout not implemented")
}
func (*UnimplementedAuthServer) ListLobbies(req *dto.Auth, srv Auth_ListLobbiesServer) error {
	return status.Errorf(codes.Unimplemented, "method ListLobbies not implemented")
}
func (*UnimplementedAuthServer) CreateRoom(ctx context.Context, req *dto1.Create) (*room.R, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateRoom not implemented")
}
func (*UnimplementedAuthServer) ConnectRoom(ctx context.Context, req *dto1.Connect) (*room.R, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ConnectRoom not implemented")
}
func (*UnimplementedAuthServer) CreatePlayer(ctx context.Context, req *dto1.Create) (*player.P, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreatePlayer not implemented")
}

func RegisterAuthServer(s *grpc.Server, srv AuthServer) {
	s.RegisterService(&_Auth_serviceDesc, srv)
}

func _Auth_Subscribe_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(dto.Subscribe)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServer).Subscribe(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/grpc.Auth/Subscribe",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServer).Subscribe(ctx, req.(*dto.Subscribe))
	}
	return interceptor(ctx, in, info, handler)
}

func _Auth_Unsubscribe_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(dto.Unsubscribe)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServer).Unsubscribe(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/grpc.Auth/Unsubscribe",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServer).Unsubscribe(ctx, req.(*dto.Unsubscribe))
	}
	return interceptor(ctx, in, info, handler)
}

func _Auth_Signin_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(dto.Signin)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServer).Signin(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/grpc.Auth/Signin",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServer).Signin(ctx, req.(*dto.Signin))
	}
	return interceptor(ctx, in, info, handler)
}

func _Auth_Signout_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(dto.Auth)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServer).Signout(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/grpc.Auth/Signout",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServer).Signout(ctx, req.(*dto.Auth))
	}
	return interceptor(ctx, in, info, handler)
}

func _Auth_ListLobbies_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(dto.Auth)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(AuthServer).ListLobbies(m, &authListLobbiesServer{stream})
}

type Auth_ListLobbiesServer interface {
	Send(*lobby.L) error
	grpc.ServerStream
}

type authListLobbiesServer struct {
	grpc.ServerStream
}

func (x *authListLobbiesServer) Send(m *lobby.L) error {
	return x.ServerStream.SendMsg(m)
}

func _Auth_CreateRoom_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(dto1.Create)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServer).CreateRoom(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/grpc.Auth/CreateRoom",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServer).CreateRoom(ctx, req.(*dto1.Create))
	}
	return interceptor(ctx, in, info, handler)
}

func _Auth_ConnectRoom_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(dto1.Connect)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServer).ConnectRoom(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/grpc.Auth/ConnectRoom",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServer).ConnectRoom(ctx, req.(*dto1.Connect))
	}
	return interceptor(ctx, in, info, handler)
}

func _Auth_CreatePlayer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(dto1.Create)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServer).CreatePlayer(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/grpc.Auth/CreatePlayer",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServer).CreatePlayer(ctx, req.(*dto1.Create))
	}
	return interceptor(ctx, in, info, handler)
}

var _Auth_serviceDesc = grpc.ServiceDesc{
	ServiceName: "grpc.Auth",
	HandlerType: (*AuthServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Subscribe",
			Handler:    _Auth_Subscribe_Handler,
		},
		{
			MethodName: "Unsubscribe",
			Handler:    _Auth_Unsubscribe_Handler,
		},
		{
			MethodName: "Signin",
			Handler:    _Auth_Signin_Handler,
		},
		{
			MethodName: "Signout",
			Handler:    _Auth_Signout_Handler,
		},
		{
			MethodName: "CreateRoom",
			Handler:    _Auth_CreateRoom_Handler,
		},
		{
			MethodName: "ConnectRoom",
			Handler:    _Auth_ConnectRoom_Handler,
		},
		{
			MethodName: "CreatePlayer",
			Handler:    _Auth_CreatePlayer_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "ListLobbies",
			Handler:       _Auth_ListLobbies_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "github.com/elojah/game_02/cmd/auth/grpc/auth.proto",
}