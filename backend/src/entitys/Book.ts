import {Entity, Column, PrimaryGeneratedColumn, EntityManager} from 'typeorm'

@Entity()
export class Book{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('varchar',{ length: 50 })
    name!: string;

    @Column("text")
    description!: string;

    @Column('varchar', { length: 50 })
    author!: string;

    @Column('varchar', { length: 20 })
    color!: string;
}