import { TestRepository } from "./test.repository";
export class TestService
{
    private testRepo : TestRepository = new TestRepository();

    addNumber() {
        return this.testRepo.getnumberInDB() + 10;
    }
}