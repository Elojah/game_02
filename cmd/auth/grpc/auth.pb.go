// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: github.com/elojah/game_02/cmd/auth/grpc/auth.proto

package grpc

import (
	context "context"
	fmt "fmt"
	dto "github.com/elojah/game_02/pkg/account/dto"
	lobby "github.com/elojah/game_02/pkg/lobby"
	player "github.com/elojah/game_02/pkg/player"
	dto2 "github.com/elojah/game_02/pkg/player/dto"
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
	// 437 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x91, 0xbf, 0x6f, 0xd4, 0x30,
	0x14, 0xc7, 0x63, 0x51, 0xb5, 0x9c, 0x83, 0xf8, 0xe1, 0x81, 0x21, 0x48, 0x4f, 0x08, 0x21, 0xc4,
	0xd0, 0xda, 0xc7, 0x55, 0x88, 0x19, 0x0a, 0xdb, 0x0d, 0x55, 0x2b, 0x66, 0x94, 0xe4, 0x8c, 0x2f,
	0x70, 0xc9, 0x8b, 0x72, 0xce, 0x70, 0x1b, 0x1b, 0x2b, 0x7f, 0x06, 0x7f, 0x02, 0x63, 0x47, 0xc6,
	0x1b, 0x3b, 0x12, 0x67, 0x61, 0xec, 0xc8, 0x88, 0x6c, 0xa7, 0x4d, 0x86, 0xde, 0xe9, 0x96, 0xe4,
	0xbd, 0xe7, 0xef, 0xe7, 0x3d, 0xfb, 0xfb, 0xe8, 0x44, 0x65, 0x7a, 0x5e, 0x27, 0x3c, 0xc5, 0x5c,
	0xc8, 0x05, 0x7e, 0x89, 0xe7, 0x42, 0xc5, 0xb9, 0xfc, 0x34, 0x9e, 0x88, 0x34, 0x9f, 0x89, 0xb8,
	0xd6, 0x73, 0xa1, 0xaa, 0x32, 0x75, 0x11, 0x2f, 0x2b, 0xd4, 0xc8, 0xf6, 0x6c, 0x21, 0x3a, 0x1a,
	0x90, 0x0a, 0x15, 0x0a, 0x77, 0x98, 0xd4, 0x9f, 0x5d, 0xe6, 0x12, 0x17, 0x79, 0x28, 0x7a, 0xa2,
	0x10, 0xd5, 0x42, 0xf6, 0x2a, 0x99, 0x97, 0x7a, 0xd5, 0x1d, 0x8a, 0xcd, 0xb7, 0x28, 0xbf, 0x2a,
	0xb1, 0xc0, 0x24, 0x59, 0xf9, 0x6f, 0x07, 0xbc, 0xda, 0x0e, 0x94, 0x8b, 0x78, 0x25, 0xab, 0xee,
	0xd7, 0x21, 0x47, 0xdb, 0x91, 0x0a, 0x31, 0x77, 0x9f, 0x4e, 0xfe, 0x66, 0xbb, 0x3c, 0x4e, 0x53,
	0xac, 0x0b, 0x2d, 0x66, 0x1a, 0xaf, 0xe3, 0xdd, 0xae, 0xe6, 0xe6, 0x58, 0x6a, 0x30, 0xeb, 0xf5,
	0x4e, 0xaf, 0xb1, 0xd0, 0xf0, 0x45, 0x93, 0xef, 0x77, 0xe8, 0xde, 0xdb, 0x5a, 0xcf, 0xd9, 0x31,
	0x1d, 0x9d, 0xd7, 0xc9, 0x32, 0xad, 0xb2, 0x44, 0xb2, 0xfb, 0x7c, 0xa6, 0x91, 0xdf, 0xe4, 0xd1,
	0x63, 0xee, 0x9d, 0xe7, 0xd7, 0xce, 0xf3, 0x0f, 0xd6, 0x79, 0x36, 0xa6, 0xe1, 0xc7, 0x62, 0x79,
	0x83, 0x8d, 0x1c, 0x66, 0xdb, 0x6d, 0x24, 0x9e, 0xd2, 0xfd, 0xf3, 0x4c, 0x15, 0x59, 0xc1, 0x42,
	0x3f, 0xc3, 0x25, 0x51, 0x4f, 0xb2, 0x43, 0x7a, 0x60, 0x8b, 0x58, 0xeb, 0x5d, 0xfa, 0x3d, 0xa3,
	0xe1, 0x49, 0x25, 0x63, 0x2d, 0xa7, 0x76, 0xb3, 0x43, 0xe2, 0x2e, 0xf7, 0xcb, 0x9e, 0xb2, 0xe7,
	0x34, 0x9c, 0x66, 0x4b, 0x6d, 0x15, 0x99, 0x5c, 0xde, 0xaa, 0x19, 0x13, 0xf6, 0x82, 0x52, 0xdf,
	0xe9, 0x0c, 0x31, 0x67, 0x0f, 0x9c, 0xa8, 0x2f, 0x44, 0x07, 0xdc, 0x99, 0x7d, 0xc6, 0x5e, 0xd2,
	0xf0, 0x04, 0x8b, 0x42, 0xa6, 0xda, 0x09, 0x1f, 0x7a, 0x61, 0x5f, 0xe9, 0x95, 0x87, 0xf4, 0x9e,
	0x6f, 0x70, 0xea, 0x1c, 0x67, 0x8f, 0x06, 0x3d, 0x7d, 0x29, 0x1a, 0xf1, 0x6e, 0x1b, 0xa7, 0xef,
	0xde, 0xaf, 0x1b, 0x08, 0x2e, 0x1b, 0x08, 0xae, 0x1a, 0x20, 0xff, 0x1a, 0x20, 0xdf, 0x0c, 0x90,
	0x9f, 0x06, 0xc8, 0x2f, 0x03, 0xe4, 0xc2, 0x00, 0xf9, 0x6d, 0x80, 0xac, 0x0d, 0x90, 0x3f, 0x06,
	0xc8, 0x5f, 0x03, 0xc1, 0x95, 0x01, 0xf2, 0xa3, 0x85, 0xe0, 0xa2, 0x05, 0xb2, 0x6e, 0x21, 0xb8,
	0x6c, 0x21, 0x48, 0xf6, 0x9d, 0x3f, 0xc7, 0xff, 0x03, 0x00, 0x00, 0xff, 0xff, 0x4f, 0xb8, 0x08,
	0x24, 0x94, 0x03, 0x00, 0x00,
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
	Unsubscribe(ctx context.Context, in *dto.Auth, opts ...grpc.CallOption) (*types.Empty, error)
	Signin(ctx context.Context, in *dto.Signin, opts ...grpc.CallOption) (*dto.Auth, error)
	Signout(ctx context.Context, in *dto.Auth, opts ...grpc.CallOption) (*types.Empty, error)
	CreateLobby(ctx context.Context, in *dto.Auth, opts ...grpc.CallOption) (*lobby.L, error)
	ListLobbies(ctx context.Context, in *dto.Auth, opts ...grpc.CallOption) (Auth_ListLobbiesClient, error)
	CreateRoom(ctx context.Context, in *dto1.CreateRoom, opts ...grpc.CallOption) (*room.R, error)
	ConnectRoom(ctx context.Context, in *dto1.ConnectRoom, opts ...grpc.CallOption) (*room.R, error)
	CreatePlayer(ctx context.Context, in *dto2.CreatePlayer, opts ...grpc.CallOption) (*player.P, error)
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

func (c *authClient) Unsubscribe(ctx context.Context, in *dto.Auth, opts ...grpc.CallOption) (*types.Empty, error) {
	out := new(types.Empty)
	err := c.cc.Invoke(ctx, "/grpc.Auth/Unsubscribe", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authClient) Signin(ctx context.Context, in *dto.Signin, opts ...grpc.CallOption) (*dto.Auth, error) {
	out := new(dto.Auth)
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

func (c *authClient) CreateLobby(ctx context.Context, in *dto.Auth, opts ...grpc.CallOption) (*lobby.L, error) {
	out := new(lobby.L)
	err := c.cc.Invoke(ctx, "/grpc.Auth/CreateLobby", in, out, opts...)
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

func (c *authClient) CreateRoom(ctx context.Context, in *dto1.CreateRoom, opts ...grpc.CallOption) (*room.R, error) {
	out := new(room.R)
	err := c.cc.Invoke(ctx, "/grpc.Auth/CreateRoom", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authClient) ConnectRoom(ctx context.Context, in *dto1.ConnectRoom, opts ...grpc.CallOption) (*room.R, error) {
	out := new(room.R)
	err := c.cc.Invoke(ctx, "/grpc.Auth/ConnectRoom", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authClient) CreatePlayer(ctx context.Context, in *dto2.CreatePlayer, opts ...grpc.CallOption) (*player.P, error) {
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
	Unsubscribe(context.Context, *dto.Auth) (*types.Empty, error)
	Signin(context.Context, *dto.Signin) (*dto.Auth, error)
	Signout(context.Context, *dto.Auth) (*types.Empty, error)
	CreateLobby(context.Context, *dto.Auth) (*lobby.L, error)
	ListLobbies(*dto.Auth, Auth_ListLobbiesServer) error
	CreateRoom(context.Context, *dto1.CreateRoom) (*room.R, error)
	ConnectRoom(context.Context, *dto1.ConnectRoom) (*room.R, error)
	CreatePlayer(context.Context, *dto2.CreatePlayer) (*player.P, error)
}

// UnimplementedAuthServer can be embedded to have forward compatible implementations.
type UnimplementedAuthServer struct {
}

func (*UnimplementedAuthServer) Subscribe(ctx context.Context, req *dto.Subscribe) (*types.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Subscribe not implemented")
}
func (*UnimplementedAuthServer) Unsubscribe(ctx context.Context, req *dto.Auth) (*types.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Unsubscribe not implemented")
}
func (*UnimplementedAuthServer) Signin(ctx context.Context, req *dto.Signin) (*dto.Auth, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Signin not implemented")
}
func (*UnimplementedAuthServer) Signout(ctx context.Context, req *dto.Auth) (*types.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Signout not implemented")
}
func (*UnimplementedAuthServer) CreateLobby(ctx context.Context, req *dto.Auth) (*lobby.L, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateLobby not implemented")
}
func (*UnimplementedAuthServer) ListLobbies(req *dto.Auth, srv Auth_ListLobbiesServer) error {
	return status.Errorf(codes.Unimplemented, "method ListLobbies not implemented")
}
func (*UnimplementedAuthServer) CreateRoom(ctx context.Context, req *dto1.CreateRoom) (*room.R, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateRoom not implemented")
}
func (*UnimplementedAuthServer) ConnectRoom(ctx context.Context, req *dto1.ConnectRoom) (*room.R, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ConnectRoom not implemented")
}
func (*UnimplementedAuthServer) CreatePlayer(ctx context.Context, req *dto2.CreatePlayer) (*player.P, error) {
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
	in := new(dto.Auth)
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
		return srv.(AuthServer).Unsubscribe(ctx, req.(*dto.Auth))
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

func _Auth_CreateLobby_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(dto.Auth)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServer).CreateLobby(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/grpc.Auth/CreateLobby",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServer).CreateLobby(ctx, req.(*dto.Auth))
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
	in := new(dto1.CreateRoom)
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
		return srv.(AuthServer).CreateRoom(ctx, req.(*dto1.CreateRoom))
	}
	return interceptor(ctx, in, info, handler)
}

func _Auth_ConnectRoom_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(dto1.ConnectRoom)
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
		return srv.(AuthServer).ConnectRoom(ctx, req.(*dto1.ConnectRoom))
	}
	return interceptor(ctx, in, info, handler)
}

func _Auth_CreatePlayer_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(dto2.CreatePlayer)
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
		return srv.(AuthServer).CreatePlayer(ctx, req.(*dto2.CreatePlayer))
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
			MethodName: "CreateLobby",
			Handler:    _Auth_CreateLobby_Handler,
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
