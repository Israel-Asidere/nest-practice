import { IsBoolean, isBoolean, isNotEmpty, IsNotEmpty, IsOptional, IsString, isString, MaxLength, maxLength, MinLength, minLength } from "class-validator";

export class CreatePostDto{

    @IsNotEmpty({message: 'Title is required'})
    @IsString({message: 'Title must be a string'})
    @MinLength(3, {message: 'Title must be at least 3 chrarcters long'})
    @MaxLength(50,{message: 'Title can not be longer than 50 characters'})
    title : string

    @IsNotEmpty({message: 'Content is required'})
    @IsString({message: 'Content must be a string'})
    @MinLength(5, {message: 'Content must be at least 5 chrarcters long'})
    content: string

    @IsOptional()
    @IsNotEmpty({message: 'Author is required'})
    @IsString({message: 'Author must be a string'})
    @MinLength(2, {message: 'Author must be at least 2 chrarcters long'})
    @MaxLength(25,{message: 'Title can not be longer than 25 characters'})
    authorName: string;
    
    //i think theres no validation for createdAt because it is auto populated like id
    @IsNotEmpty({message: 'A Special Symbol is required'})
    @IsString({message: 'Special Symbol must be a special symbol'})
    @MinLength(1, {message: 'Special Symbol must be at least 1 chrarcters long'})
    @MaxLength(4,{message: 'Special Symbol can not be longer than 4 characters'})
    specialSymbol : string

    @IsBoolean()
    isRegistered : boolean
}