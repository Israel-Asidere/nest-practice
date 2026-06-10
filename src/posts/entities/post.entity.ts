import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

//this is the reason we are using type Orm
@Entity()
export class Post{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:50})
    title:string;

    @Column({type:'text'})
    content:string;

    @Column()
    authorName:string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

    @Column()
    specialSymbol: string

    @Column()
    isRegistered: boolean

}